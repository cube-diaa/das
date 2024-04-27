'use client'
import {useCallback, useEffect, useRef} from "react";
import {IProps} from "@/app/_component/Modal/props";


export default function Component({
                                      isOpen,
                                      children,
                                      maskClosable,
                                      onClose
                                  }: IProps) {
    const ref = useRef<HTMLDialogElement>(null);

    const handleShow = useCallback(() => {
        ref.current?.showModal();
    }, [ref]);

    useEffect(() => {
        isOpen && handleShow()
    }, [isOpen])

    return (<dialog className="modal" ref={ref}>
            <div className="modal-box">
                {children}
                <div className="modal-action">
                    <form method="dialog">
                        <button
                            onClick={() => {
                                onClose && onClose()
                            }
                            } className="btn">close
                        </button>
                    </form>
                </div>
            </div>

        </dialog>
    )
}