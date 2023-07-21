
/* External Inputs */
const EIl = () => {
    var inlow = document.getElementById('eilow').value
    ti=document.getElementById('eitotal')
    ti.innerText = inlow*3
}

const EIa = () => {
    var inavg = document.getElementById('eiavg').value
    var ti = document.getElementById('eitotal')
    ti.innerText = inavg*4
}

const EIh = () => {
    var inhg = document.getElementById('eihg').value
    var ti = document.getElementById('eitotal')
    ti.innerText = inhg*6
}

/* External Outputs */

const EOl = () => {
    var oplow = document.getElementById('eolow').value
    var to = document.getElementById('eototal')
    to.innerText = oplow*4
}

const EOa = () => {
    var opavg = document.getElementById('eoavg').value
    var to = document.getElementById('eototal')
    to.innerText = opavg*5
}

const EOh = () => {
    var ophg = document.getElementById('eohg').value
    var to = document.getElementById('eototal')
    to.innerText = ophg*7
}


/* External Inquiries */

const EQl = () => {
    var oqlow = document.getElementById('eqlow').value
    var tq = document.getElementById('eqtotal')
    tq.innerText = oqlow*3
}

const EQa = () => {
    var oqavg = document.getElementById('eqavg').value
    var tq = document.getElementById('eqtotal')
    tq.innerText = oqavg*4
}

const EQh = () => {
    var oqhg = document.getElementById('eqhg').value
    var tq = document.getElementById('eqtotal')
    tq.innerText = oqhg*6
}

/* FILES */

const IFl = () => {
    var iflow = document.getElementById('flow').value
    var tf = document.getElementById('ftotal')
    tf.innerText = iflow*7
}

const IFa = () => {
    var ifavg = document.getElementById('favg').value
    var tf = document.getElementById('ftotal')
    tf.innerText = ifavg*10
}

const IFh = () => {
    var ifhg = document.getElementById('fhg').value
    var tf = document.getElementById('ftotal')
    tf.innerText = ifhg*15
}

/* INTERFACE */

const Il = () => {
    var ilow = document.getElementById('ilow').value
    var tin = document.getElementById('itotal')
    tin.innerText = ilow*5
}

const Ia = () => {
    var iavg = document.getElementById('iavg').value
    var tin = document.getElementById('itotal')
    tin.innerText = iavg*7
}

const Ih = () => {
    var ihg = document.getElementById('ihg').value
    var tin = document.getElementById('itotal')
    tin.innerText = ihg*10
}

function UAFtotal() {
    var ti=Number(document.getElementById('eitotal').innerText)
    var to =Number(document.getElementById('eototal').innerText)
    var tq = Number(document.getElementById('eqtotal').innerText)
    var tf = Number(document.getElementById('ftotal').innerText)
    var tin = Number(document.getElementById('itotal').innerText)
    var totaluaf = ti+to+tq+tf+tin

    console.log(totaluaf)
}