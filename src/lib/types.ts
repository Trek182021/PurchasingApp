export type stepsType = {
    title: string;
    path: string;
    description: string;
    component: React.FunctionComponentElement<any>;
    onSubmit?: (result: any) => void;
}

export type settingsSideLinks = {
    title: string;
    path: string;
}

export type Item = {
    id: string
    item_description: string;
    quantity: number;
    unit_price: number;
    total_amount: number;
    vendor: string;
    url: string;
    comment: string;
    has_file: boolean;
}

export type Request = {
    id: string
    name: string
    total_cost: number
    item_count: number
    contact_no: string
    contact_email: string
    status: string
}