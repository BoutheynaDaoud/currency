export class Currency {
    id: number;
    attributes: CurrencyAttributes;
}

export class CurrencyAttributes {
        code: string;
        name: string;
        currency_type: string;
        code_iso_numeric3: string;
        code_iso_alpha3: string;
        symbol: string;
        native_symbol: string;
        category: string;
}

export class PaginatorOptions {
    length: number;
    size: number;
    index: number;

}

export class FilterOptions {
    text: string;
    valueChoosed: string;

}
