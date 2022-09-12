import React from "react"

export default function getClassName(i){
    if (i%5===0){
        return 'big'
    }
    if (i%6===0) {
        return 'wide'
    }
    return ""
} 