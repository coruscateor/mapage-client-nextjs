
import AppLayout from '../app/app_layout'

export default function Test() {
  return (
    <AppLayout>

        <div className="flex">
            <div className="flex flex-row">
                <div className="flex flex-row basis-1/4">URL:</div>
                <div className="flex flex-row basis-3/4"><input type="text"></input></div>
            </div>
            <div className="flex flex-row">02</div>
            <div className="flex flex-row">03</div>
            test
        
        </div>

    </AppLayout>
  )
}
