export interface InputProps{
    value: string
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    placeholder:string
    type?: string
    name?: string
    id: string
    className: string
}
