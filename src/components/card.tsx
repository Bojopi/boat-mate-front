
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

export default function CardComponent() {

    const footer = (
        <div className="flex flex-wrap justify-end gap-2">
            <Button label="Save" icon="pi pi-check" />
            <Button label="Cancel" icon="pi pi-times" className="p-button-outlined p-button-secondary" />
        </div>
    );

    return(
        <div className="card">
            <Card title="Title" footer={footer} className="w-full">
                <p className="m-0">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae 
                    numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
                </p>
            </Card>
        </div>
    )
};