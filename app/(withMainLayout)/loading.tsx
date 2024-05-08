import {SyncLoader} from "react-spinners";

export default function Loading() {
    return <div className={'loading-page'}>
        <SyncLoader style={{
            backgroundColor: "inherit",
            color: "inherit"
        }}/>
    </div>
}