import React from "react";

export interface IProps {
    isOpen: boolean
    children: React.ReactNode
    maskClosable?: boolean
    onClose?: () => void
}
