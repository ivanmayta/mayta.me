import esCv from "@cv"
import enCv from "cv_english.json"
export const languages = {
    es: "Español",
    en: "English",
}
export const defaultLang = "es"
export const showDefaultLang = false

export const ui = {
    es: esCv,
    en: enCv,
} as const
