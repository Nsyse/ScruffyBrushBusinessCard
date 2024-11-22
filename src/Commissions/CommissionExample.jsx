export default function CommissionExample({price, title, src}) {
    return <div className="priceSection">
        <h2 className={"pricelabel"}>{price}<span className={"dollarSign"}>U$D</span></h2>
        <div className={"commissionExample"}>
            <h3 className={"commissionType"}>{title}</h3>
            <img className={"imageExample"} src={src}/>
        </div>
    </div>
}