export const categories = [
    {value: "strings", label: "Textos e Listas", disable: false},
    {value: "numbers", label: "Números", disable: true},
    {value: "math", label: "Matemática", disable: true},
    {value: "images", label: "Imagens", disable: true},
    {value: "date", label: "Data e Hora", disable: true},
    {value: "devs", label: "Programaçao", disable: true},
    {value: "internet", label: "Internet", disable: true},
    {value: "social", label: "Redes Sociais", disable: true},
]

export const tools = [
    {
        title: "Converter Maiúsculas e Minúsculas",
        desc: "Converta para maiúsculas, minúsculas e muito mais.",
        route: "conversor-maiuscula-minuscula",
        category: "strings",
        icon: "case"
    },
    {
        title: "Remover Espaços Extras",
        desc: "Remova os espaços extras entre as palavras.",
        route: "remover-espacos-extras",
        category: "strings",
        icon: "remove"
    },
    {
        title: "Localizar e Substituir Palavras",
        desc: "Localize e substitua palavras em um texto.",
        route: "localizar-substituir",
        category: "strings",
        icon: "search"
    },
    {
        title: "Contador de Caracteres",
        desc: "Obtenha o número de caracteres, palavras e linhas.",
        route: "contador-caracteres",
        category: "strings",
        icon: "counter"
    }
]

