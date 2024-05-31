export default {
    sendResetPWCode: async (phoneNumber: string, code: string) => {
        return new Promise(function (resolve, reject) {
            setTimeout(() => resolve(phoneNumber + '_' + code), 1000)
        });
    },
    getCode: (code: string) => {
        return code
    }
}

export function crc32() { }

export function combin() { }
