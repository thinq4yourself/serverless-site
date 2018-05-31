/**
 * Sumo script in head
 */

// let sumo = '<!-- Sumo script here in prod -->' /* noOp for local dev */

// if (process.env.NODE_ENV === "production" && process.env.SEGMENT_KEY) { // eslint-disable-line
    const sumo = `<script async>(function(s,u,m,o,j,v){j=u.createElement(m);v=u.getElementsByTagName(m)[0];j.async=1;j.src=o;j.dataset.sumoSiteId='447e43134813c546a74d755756fb93efb84a4c480435dd867780b9488096c9d4';v.parentNode.insertBefore(j,v)})(window,document,'script','//load.sumo.com/');</script>`
//}


module.exports = sumo