import { FormControl, InputLabel, MenuItem, Select } from "@mui/material"
import { MenuCategories } from "@prisma/client"
import { Dispatch, SetStateAction } from "react"

interface Props {
    title: string
    selected: number | undefined
    setSelected: Dispatch<SetStateAction<number | undefined>>
    items: MenuCategories[]
}

export const SingleSelect = ({title, selected, setSelected,items}:Props) => {
    return (
        <FormControl sx={{width: 300, mt: 2, mb: 1}}>
            <InputLabel>{title}</InputLabel>
            <Select
            value={selected}
            label={title}
            onChange={(evt) => setSelected(Number(evt.target.value))}
            >
                {items.map((item) => (
                    <MenuItem key={item.id} value={item.id}>
                        {item.name}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    )
}