const local = {
    baseUrlApi: 'http://localhost:1002'
}

const staging = {
    baseUrlApi: 'https://mogo-appi.onrender.com/'
}

const config = {
    local,
    staging
}

export default config['local']