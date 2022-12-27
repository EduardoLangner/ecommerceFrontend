export const validateName = new RegExp(/\b[A-Za-zÀ-ú][A-Za-zÀ-ú]+,?\s[A-Za-zÀ-ú][A-Za-zÀ-ú]{2,19}\b/);
export const validateCPF = new RegExp(/^[0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2}$/)
export const validateTelephone = new RegExp(/^\([1-9]{2}\) (?:[2-8]|9[1-9])[0-9]{3}\-[0-9]{4}$/)
export const validadeEmail = new RegExp(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]{3}$/i)
export const validatePassword = new RegExp(/(?=^.{8,}$)(?=.*\d)(?=.*[!@#$%^&*]+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/)
export const validateConfirmPassword = new RegExp(/(?=^.{8,}$)(?=.*\d)(?=.*[!@#$%^&*]+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/)
// O tamanho da senha deve ser maior ou igual a 8
// A senha deve conter um ou mais caracteres maiúsculos
// A senha deve conter um ou mais caracteres minúsculos
// A senha deve conter um ou mais valores numéricos
// A senha deve conter um ou mais caracteres especiais
