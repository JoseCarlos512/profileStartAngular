export interface Noticia {
    _id?: string;
    titulo?: string;
    subtitulo?: string;
    autor?: string;
    img?: string;
    imgYo?: string;
    texto1?: string;
    texto2?: string;
    texto3?: string;
    texto4?: string;
    texto5?: string;
    created?: Date;
}

export interface RootObject {
    ok: boolean;
    pagina: number;
    noticia: Noticia[];
}