const itemlist = ({ items }) => {
    console.log(items);
    return
     <div>
        {items.map((item) => (
            <div key = {item.card.info.id} className="p-2 m2 border>
                <div><span>{item.card.info.name}</span>
                <span>{item.card.info.price}</span>
                </div>
                <p></p>

            </div>       
        )}
    </div>
    
}