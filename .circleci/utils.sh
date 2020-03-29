#!/usr/bin/env bash

#------------------------------
# vars
#------------------------------

# colors
BLACK="0;30"
LIGHT_GREEN="1;32"
LIGHT_BLUE="1;34"
LIGHTER_GREY="0;37"

# colors helpers
RESET="\033[0m"
FG="\033[0;"

# helpers
extract_version=(sed 's/[^0-9.]*//g')

#------------------------------
# functions
#------------------------------

print_heading() {
    printf "%b %s %b\n" "${FG}${LIGHT_GREEN}m" "$1" "$RESET"
}

print_option() {
    printf "%b %.15s %b%s%b\n" "${FG}${LIGHTER_GREY}m" "${1} ................." "${FG}${LIGHT_BLUE}m" "$2" "${RESET}"
}

print_info() {
    printf "%b %s %b\n" "${FG}${LIGHT_BLUE}m" "$1" "$RESET"
}

print_success() {
    printf "%b %s %b\n" "${FG}${LIGHT_GREEN}m" "$1" "$RESET"
}

print_os_versions() {
    debian_version=$(cat /etc/debian_version 2>&1 | "${extract_version[@]}")
    print_option "debian" "${debian_version}"
}

print_python_versions() {
    python_version=$(python -V 2>&1 | "${extract_version[@]}")
    print_option "python" "${python_version}"

    pip_version=$(pip -V 2>&1 | cut -b 1-20 | "${extract_version[@]}")
    print_option "pip" "${pip_version}"
}

print_node_versions() {
    node_version=$(node -v 2>&1 | "${extract_version[@]}")
    print_option "node" "${node_version}"

    npm_version=$(npm -v 2>&1 | "${extract_version[@]}")
    print_option "npm" "${npm_version}"
}

print_docker_versions() {
    docker_version=$(docker -v 2>&1 | "${extract_version[@]}")
    print_option "docker" "${docker_version}"

    docker_compose_version=$(docker-compose -v 2>&1 | "${extract_version[@]}")
    print_option "docker-compose" "${docker_compose_version}"
}
