#!/bin/bash
cd "$(dirname "$0")"
tslint --fix 'assets/**/*.ts'

say 完成。

exit


