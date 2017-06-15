/*
 * File: assignToEmpty.js | Package: monoux
 *
 * Author:    Miguel Zamora Serrano <mzamoras@backlogics.com>
 * Created:   26 Oct, 2016 | 10:2 AM
 *
 * This file is part of a package and all the information, intellectual
 * and technical concepts contained here are property of their owners.
 * Any kind of use, reproduction, distribution, publication, etc. without
 * express written permission from CapitalMental && BackLogics Technologies
 * is strictly forbidden.
 *
 * CapitalMental && BackLogics Technologies
 * Copyright 2014-present. | All rights reserved.
 */

const assign = Object.assign;

const assignToEmpty = (oldObject, newObject, thirdObject = null) => {
    if( thirdObject ){
        return assign({}, oldObject, newObject, thirdObject);
    }
    return assign({}, oldObject, newObject);
};

export default assignToEmpty;
