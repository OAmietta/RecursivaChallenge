import React from 'react'
import {categories} from "constants/data";

export default function Slider() {
    return (
        <div>
            {categories.map(item => item.img)}
        </div>
    )
}
