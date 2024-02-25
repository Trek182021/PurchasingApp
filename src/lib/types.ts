export type stepsType = {
    title: string;
    path: string;
    description: string;
    component: React.FunctionComponentElement<any>;
    onSubmit?: (result: any) => void;
}
