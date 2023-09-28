const local = {
    baseUrlApi: 'http://localhost:1002'
}

const staging = {
    baseUrlApi: ''
}

const config = {
    local,
    staging
}

export default config['local']