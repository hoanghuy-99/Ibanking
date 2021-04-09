const formatMoney = (num)=>{
    return Intl.NumberFormat('vn-VN', {style: 'currency', currency:'VND'}).format(num)
}

export { formatMoney }