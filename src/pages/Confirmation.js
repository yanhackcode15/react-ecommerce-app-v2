import React from "react"
import { useParams } from "react-router-dom"
import {Context} from "../Context"

export default function Confirmation() {
    const {price} = useParams()
    return (
        <h2 className="confirmation-text">Your order has been placed. Total amount charged: ${price}. Your shipping information will be emailed to you.</h2>
    )
}