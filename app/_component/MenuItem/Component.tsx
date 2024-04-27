import IProps from "@/app/_component/MenuItem/props";

export default function Component({
                                      text,
                                      children,
                                      icon,
                                      href
                                  }: IProps) {
    return (
        <li>
            {children &&
                <details open>
                    <summary>{text}</summary>
                    <ul>
                        {
                            children?.map(({text}, index) => {
                                return <li key={index}><a>{text}</a></li>
                            })
                        }
                    </ul>
                </details>
            }
        </li>
    )
}