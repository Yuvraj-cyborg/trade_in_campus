set shell := ["bash", "-uc"]
set dotenv-load

file := ".env.prod"
encrypted := file + ".gpg"

encrypt:
    gpg --batch --yes --passphrase "$FILE_PASSWORD" --symmetric --cipher-algo AES256 "{{file}}"
    echo "File {{file}} encrypted to {{encrypted}}"

decrypt:
    gpg --batch --yes --passphrase "$FILE_PASSWORD" --decrypt --output "{{file}}" "{{encrypted}}"
    echo "File {{encrypted}} decrypted to {{file}}"
