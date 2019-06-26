#!/bin/bash
echo Running Linting 
prettier --write **/*.js
prettier --write --html-whitespace-sensitivity strict **/*.html
prettier --write **/*.css