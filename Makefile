# -----------------------------
# vars
# -----------------------------

SHELL := /bin/bash
COMMA := ,

# envs
ENV := local
ENVS := local
ENV_FILENAME := .env
ENV_TARGET_FILENAME := .env.$(ENV)
ENV_TPL_FILENAME := .env.$(ENV).tpl
ENV_TARGET_DIFF := if [[ -f $(ENV_TARGET_FILENAME) ]]; then sh ./scripts/get-files-key-diff.sh $(ENV_TPL_FILENAME) $(ENV_TARGET_FILENAME); fi

# TODO: do these in a loop
ENV_LOCAL_TPL_DIFF := if [[ -f .env.local.tpl && -f .env.local ]]; then sh ./scripts/get-files-key-diff.sh .env.local .env.local.tpl; fi

# scripts
print_utils := ./scripts/print-utils.sh

# -----------------------------------------------------------
# functions
# -----------------------------------------------------------

# -----------------------------
# print
# -----------------------------

define print
	@$(eval COLOR=$(or $(3),$(MAKE_THEME)))
	@$(eval MOD=$(or $(4),NORMAL))
    @echo $$(sh $(print_utils) $(1) $(2) $(COLOR) $(MOD))
endef

define printList
	@$(eval COLOR=$(or $(2),$(MAKE_THEME)))
	@$(eval MOD=$(or $(3),NORMAL))
    @sh $(print_utils) printList $(1) ";" $(COLOR) $(MOD)
endef

define printDefListItem
	@$(eval COLOR1=$(or $(3),$(MAKE_THEME)))
	@$(eval COLOR2=$(or $(4),$(3),LIGHTER_GREY))
	@$(eval PAD=$(or $(5),$(MAKE_PADDING)))
    @sh $(print_utils) printDefListItem $(1) $(2) $(COLOR1) $(COLOR2) $(PAD)
endef

# -----------------------------------------------------------
# includes
# -----------------------------------------------------------

# include env file and make print library
-include .env.$(ENV)

# -----------------------------
# help
# -----------------------------

help:
	@$(call print,h1,"AVAILABLE OPTIONS")
	@echo ""
	@$(call print,h3,"ENV")
	@$(call printDefListItem," - init-envs","creates all local env files")
	@$(call printDefListItem," - create-env","generates .env file for target environment")
	@echo ""
	@$(call print,h3,"utils")

# -----------------------------
# init-envs
# -----------------------------

define create-envs
	for env in $(1); do \
		cp ".env.$${env}.tpl" ".env.$${env}"; \
	done
endef

.PHONY: init-envs
init-envs:
	@$(call print,h3,"creating env files from templates ...")
	@$(call create-envs,$(ENVS))

# -----------------------------
# create-env
# -----------------------------

# TODO: make this more concise
.PHONY: _validate-tpl-envs
_validate-tpl-envs:
ifneq ($(shell $(ENV_LOCAL_TPL_DIFF)),)
	@$(call print,h2,"YOU HAVE ADDED ENVS TO .env.local PLEASE UPDATE .env.local.tpl WITH",LIGHTRED)
	@$(call printList,"$$(echo $$($(ENV_LOCAL_TPL_DIFF)) | tr ' ' ';')",GOLD)
endif
ifneq ($(shell $(ENV_LOCAL_TPL_DIFF)),)
	@exit 2
endif

.PHONY: _validate-target-env
_validate-target-env:
ifneq ($(shell $(ENV_TARGET_DIFF)),)
	@$(call print,h2,"YOU ARE MISSING ENVS PLEASE UPDATE $(ENV_TARGET_FILENAME) WITH",LIGHTRED)
	@$(call printList,"$$(echo $$($(ENV_TARGET_DIFF)) | tr ' ' ';')",GOLD)
	@exit 2
endif

.PHONY: _create-env-from-target-env
_create-env-from-target-env:
	@rm -f $(ENV_FILENAME)
	@echo -e "# ----------------------------------------\n# $(ENV)\n# ----------------------------------------\n" >> $(ENV_FILENAME)
	@cat $(ENV_TARGET_FILENAME) >> $(ENV_FILENAME)

.PHONY: _check-target-env
_check-target-env:
ifeq (,$(wildcard $(ENV_TARGET_FILENAME)))
	@$(call print,h2,"YOU ARE MISSING $(ENV_TARGET_FILENAME) PLEASE RUN \`\`npm run init\`\` OR CREATE MANUALLY")
	@exit 2
endif

.PHONY: _create-env-h
_create-env-h:
	@$(call print,h3,"creating $(ENV_FILENAME) for target environment: $(ENV) ...")

.PHONY: create-env
create-env: _create-env-h _check-target-env _validate-target-env _create-env-from-target-env

.PHONY: validate-env
validate-env: _check-target-env _validate-target-env
