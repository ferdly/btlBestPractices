import { getAllTasks, insertTask, updateTask, removeTask, hideTask } from 'backend/dataZZZ';
// ø <Table-Repeater-Developer-Config>
import { selectStar_myTaskszxz, filterTableObject, testAlterTable } from 'backend/dataZZZ';
// ø </Table-Repeater-Developer-Config>
import { local, memory, session } from 'wix-storage';

// ø <load Globals>
const htmlFontFamily = 'madefor-display';
const htmlFontSize = '14px';
let visitorId;
// ø </load Globals>
const ticktock = []
$w.onReady(async function () {
    $w('#taskRPTR').data = [];
    registerHandlers();
    setVisitor();
    // local.setItem('localShowByISO', (new Date).toISOString())
    // $w('#developerStepINPT').value = local.getItem('localShowByISO')
    // resetLocalShowByISO()
    // setLocalFilterArrayByISO('RESET')
    await allTasksHolderOnReady()
    // await filterTasksToRepeaterOnReady()
    // await testAlterTableOnReady()
});
// ø <---------- <allTasksHolderOnReady()> ---------->
async function allTasksHolderOnReady(){
    // console.group(`allTasksHolderOnReady()`)
    console.groupCollapsed(`allTasksHolderOnReady()`)
    console.log(`≈25≈X≈last function of OnReady Functions =>`)
    console.groupCollapsed(`STEP: selectStar_myTaskszxz(BE): SUCCESS: ENSABLED`)
    // console.group(`STEP: selectStar_myTaskszxz(BE): SUCCESS: ENSABLED`)
    let allTasksResult = await selectStar_myTaskszxz()
    console.log(`allTasksResult: [SQL Result as Object below]`)
    console.dir(allTasksResult)
    console.log(`groupEnd: STEP: selectStar_myTaskszxz(BE):`)
    console.groupEnd()
    // console.groupCollapsed(`STEP: selectStar_myTaskszxz(BE): ¿SUCCESS?: ENSABLED`)
    console.group(`STEP: MANUAL: Assign Payload to AllTaskHolderTable =>`)
    console.log(`#$w('#taskSourceTBL') =>`)
    console.log(`#$w('#taskSourceTBL').SOMETHING.SOMETHING => allTasksResult.payload.data =>`)
    console.log(`allTasksResult.payload.data => .columns:`)
    $w('#taskSourceTBL').columns = [
    {
        "id": "showByIso",
        "dataPath": "showByIso",
        "label": "ShowISO",
        "width": 200,
        "visible": true,
        "type": "string",
        "linkPath": "link-field-or-property"
    },
    {
        "id": "title",
        "dataPath": "title",
        "label": "Task Title",
        "width": 600,
        "visible": true,
        "type": "string",
        "linkPath": "link-field-or-property"
    },
    {
        "id": "isComplete",
        "dataPath": "isComplete",
        "label": "Task Completed",
        "width": 120,
        "visible": true,
        "type": "boolean",
        "linkPath": "link-field-or-property"
    }
    ]

    console.log(`#$w('#taskSourceTBL').SOMETHING.SOMETHING => allTasksResult.payload.data =>`)
    console.log(`allTasksResult.payload.data => .rows:`)

    $w('#taskSourceTBL').rows = allTasksResult.payload.data.rows

    console.log(`≈72≈X≈ $w('#taskSourceTBL') [full element object]`)
    console.dir($w('#taskSourceTBL'))

    console.log(`allTasksResult.payload.data => .rows: `)
    console.groupEnd()
    console.log(`$w("#taskSourceTBL").refresh();`)
    $w("#taskSourceTBL").refresh();

    console.log(`groupEnd: allTasksHolderOnReady()`)
    console.groupEnd()
}
// ø <---------- </allTasksHolderOnReady()> ---------->
// ø <---------- <filterTasksToRepeaterOnReady()> ---------->
async function filterTasksToRepeaterOnReady(){
    console.group(`async function filterTasksToRepeaterOnReady()`)
    // console.groupCollapsed(`async function filterTasksToRepeaterOnReady()`)
    let tableWiD = `#taskSourceTBL`
    let keyThis = `wuzComplete`
    let valueThis = `true`
    let operatorThis = `=`
    let isoKeyThis = `showByIso`
    console.log(`PRE: $w(tableWiD): $w(${tableWiD}): [table below]`)
    console.dir($w(tableWiD))
    $w(tableWiD).rows = await filterTableObject(keyThis, valueThis, operatorThis, isoKeyThis, $w(tableWiD))
    console.log(`PST: $w(tableWiD): $w(${tableWiD}): [table below]`)
    console.dir($w(tableWiD))
    let repeaterRows = []

    for (const row of $w(tableWiD).rows) {
        if(row.showByIso < local.getItem('localShowByISO')){
           repeaterRows.push(row) 
        }
    }

    // $w('#taskRPTR').data = $w(tableWiD).rows
    $w('#taskRPTR').data = repeaterRows
    let cardinalityString = 'STRING'
    let cardinalityIndex = 0
    $w('#taskRPTR').onItemReady(($item, itemData) => {
        cardinalityIndex++
        cardinalityString = cardinalityIndex.toString() + '.'
        $item('#cardinalityStringTXT').text = cardinalityString
        $item('#taskCompleteButton').checked = itemData.isComplete
        $item('#taskTitle').text = itemData.title;
        // if (itemData.isComplete === true) {
        //     $item('#taskCompleteButtonDEP').label = 'V';
        // }
        getHTMLtag($item('#taskTitle'), itemData.isComplete);
        // $item('#taskCompleteButtonDEP').onClick(() => changeCompleteStatus($item, itemData));
        $item('#taskCompleteButton').onChange(() => changeCompleteStatus($item, itemData));
    });

    console.log(`groupEnd: async function filterTasksToRepeaterOnReady()`)
    console.groupEnd()
}
// ø <---------- </filterTasksToRepeaterOnReady()> ---------->
// ø <---------- <testAlterTableOnReady()> ---------->
async function testAlterTableOnReady(){
    console.group(`async function testAlterTableOnReady()`)
    // console.groupCollapsed(`async function testAlterTableOnReady()`)
    // let tableWiD = `#taskSourceTBL`
    // let keyThis = `wuzComplete`
    // let valueThis = `true`
    // let operatorThis = `=`
    // let isoKeyThis = `showByIso`
    let testTable = {}
    testTable.rows = []
    let rowThis = {}
    rowThis = {}
    rowThis.title = 'Alpha'
    testTable.rows.push(rowThis) 
    rowThis = {}
    rowThis.title = 'Bravo'
    testTable.rows.push(rowThis) 
    rowThis = {}
    rowThis.title = 'Charlie'
    testTable.rows.push(rowThis) 
    console.log(`PRE: testTable: [table below]`)
    console.dir(testTable)
    let updatedTestTable = await testAlterTable(testTable)
    console.log(`PST: testTable: [table below]`)
    console.dir(testTable)
    console.log(`PST: updatedTestTable: [table below]`)
    console.dir(updatedTestTable)
    console.log(`groupEnd: async function testAlterTableOnReady()`)
    console.groupEnd()
}
// ø <---------- </testAlterTableOnReady()> ---------->
// ø <---------- <applyFilterTasksByISO()> ---------->
function applyFilterTasksByISO(key = ['UNSUPPORTED']){

}
// ø <---------- </applyFilterTasksByISO()> ---------->

// ø <Table-Repeater-Developer-Config>
async function selectStarFE_DEP_myTaskszxz(){
    
    // console.groupCollapsed(`selectStarFE_DEP_myTaskszxz()`)
    console.group(`selectStarFE_DEP_myTaskszxz()`)
    // let allTasks = await selectStar_myTaskszxz() 
    let allTasks = {}
    allTasks.info = {}
    allTasks.info.ticktock = []
    allTasks.info.ticktock.push('selectStarFE_DEP_myTaskszxz() is DEPRECATED')
    console.log(`allTasks: 'await selectStar_myTaskszxz()'`)
    console.dir(allTasks)
    return allTasks
    // ø <FUCK PROMISIES>
    // try{    
    //    let result = await selectStar_myTaskszxz() 
    // //    return result
    //    $w('#developerResponseTXTBX').value = JSON.stringify(result, undefined, 4)
    // } catch (error) {
    //     console.log(`console.error(error)`)
    //    $w('#developerResponseTXTBX').value = JSON.stringify(error, undefined, 4)
    //     console.error(error);
    // }
    // ø </FUCK PROMISIES>
    console.log(`groupEnd: selectStarFE_DEP_myTaskszxz()`)
    console.groupEnd()
}
// ø </Table-Repeater-Developer-Config>
function registerHandlers() {
    // let cardinalityString = 'STRING'
    // let cardinalityIndex = 0
    // $w('#taskRPTR').onItemReady(($item, itemData) => {
    //     cardinalityIndex++
    //     cardinalityString = cardinalityIndex.toString() + '.'
    //     $item('#cardinalityStringTXT').text = cardinalityString
    //     $item('#taskCompleteButton').checked = itemData.isComplete
    //     $item('#taskTitle').text = itemData.title;
    //     // if (itemData.isComplete === true) {
    //     //     $item('#taskCompleteButtonDEP').label = 'V';
    //     // }
    //     getHTMLtag($item('#taskTitle'), itemData.isComplete);
    //     // $item('#taskCompleteButtonDEP').onClick(() => changeCompleteStatus($item, itemData));
    //     $item('#taskCompleteButton').onChange(() => changeCompleteStatus($item, itemData));
    // });
    $w('#addButton').onClick(() => createNewTask());
    $w('#taskInput').onKeyPress((event) => {
        if (event.key === 'Enter') {
            createNewTask();
        }
    });
    // $w('#clearButton-DEPRECATED-AND-REUSED').onClick(() => clearCompletedTasks());
    // $w('#clearButton-DEPRECATED-AND-REUSED').onClick(() => hideCompletedTasks());
    $w('#doKludgeBTTN').onClick(() => {
        let result = null
        switch ($w('#whichKludgeDRPDWN').value) {
            case 'SELECTSTAR_TASKS':
                selectStarFE_DEP_myTaskszxz()
                break;
        
            default:
                break;
    }

    });
// ø <Table-Repeater-Developer-Config>

// ø </Table-Repeater-Developer-Config>
}

function setVisitor() {
    // visitorId = $w('#taskKindDRPDWN').value === 'ALL' ? 'ALL' : $w('#taskKindDRPDWN').value
    visitorId = local.getItem('visitor-id')
    if (!visitorId) {
        // visitorId = Math.random().toString(36);
        visitorId = "0.myivyif8mu"
        local.setItem('visitor-id', visitorId);
    }
    console.log(`visitorId: ${visitorId}`)
    // fetchData();
}

async function fetchData() {
    $w('#loaderImage').expand();
    console.log(`fetchData(): about to TRY: getAllTasks(${visitorId})`)
    try {
        let result = await getAllTasks(visitorId)
        console.log(`typeof result: ${typeof result}`)
        console.log(`Array.isArray(result.payload.data.rows): ${Array.isArray(result.payload.data.rows)}`)
        console.dir(result)
        let preNoResult = ''
        if(typeof result !== 'object' || Array.isArray(result) === true){
            preNoResult = `result !== 'object' || Array.isArray(result) === true`
            result = {}
        }
        result.ticktock = []
        if(typeof result.payload !== 'object' || Array.isArray(result.payload) === true){
            preNoResult = `result.payload !== 'object' || Array.isArray(result.payload) === true`
            result.payload = {}
        }
        if(preNoResult.length){result.ticktock.push(preNoResult)}
        preNoResult = ''
        if(typeof result.payload.data !== 'object' || Array.isArray(result.payload.data) === true){
            preNoResult = `result.payload.data !== 'object' || Array.isArray(result.payload.data) === true`
            result.payload.data = {}
        }
        if(typeof result.payload.data.rows !== 'object' || Array.isArray(result.payload.data.rows) !== true){
            preNoResult = `result.payload.data.rows !== 'object' || Array.isArray(result.payload.data) !== true`
            let fauxItem = {}
            fauxItem.name = 'fauxItem'
            fauxItem._id = 'id777'
            result.payload.data.rows = []
            result.payload.data.rows.push(fauxItem)
        }
        if(preNoResult.length){result.ticktock.push(preNoResult)}
        preNoResult = ''
        
        // .payload.data.rows
        console.log(`result: [object below]`)
        console.dir(result)
        if(result.payload.data.rows[0].name === 'fauxItem'){
            preNoResult = 'Do NOT load Repeater'
            if(preNoResult.length){result.ticktock.push(preNoResult)}
            preNoResult = ''
        }else{
            $w('#taskRPTR').data = result.payload.data.rows
        }
        $w('#loaderImage').collapse();
    } catch (error) {
        console.error(error);
    }
}


async function createNewTask() {
    const toInsert = {
        title: $w('#taskInput').value,
        isComplete: false,
        hideCompleted: false,
        showByIso: (new Date()).toISOString(),
        visitorId: visitorId
    };
    $w('#taskInput').value = null;
    $w('#taskInput').resetValidityIndication()
    try {
        await insertTask(toInsert);
        await fetchData();
    } catch (error) {
        console.error(error);
    }
}

async function changeCompleteStatus($item, itemData) {
    // console.groupCollapsed(`changeCompleteStatus($item, itemData)`)
    console.group(`changeCompleteStatus($item, itemData)`)
    try {
        // if ($item('#taskCompleteButtonDEP').label === 'V') {
        //     $item('#taskCompleteButtonDEP').label = '';
        //     getHTMLtag($item('#taskTitle'), false);
        //     await updateTask(itemData._id, false);
        // } else {
        //     $item('#taskCompleteButtonDEP').label = 'V';
        //     getHTMLtag($item('#taskTitle'), true);
        //     await updateTask(itemData._id, true);
        // }
        console.log(`try: SWTCH-rewrite:`)
        if ($item('#taskCompleteButton').checked === true) {
            // $item('#taskCompleteButtonDEP').label = '';
            console.log(`$item('#taskCompleteButton').checked === true [${$item('#taskCompleteButton').checked}]`)
            // getHTMLtag($item('#taskTitle'), false);
            console.log(`await updateTask(itemData._id, true): `)
            console.log(`await updateTask(${itemData._id}, ${true}): `)
            await updateTask(itemData._id, true);
        } else {
            console.log(`ELSE: $item('#taskCompleteButton').checked === true [${$item('#taskCompleteButton').checked}]`)
            // $item('#taskCompleteButtonDEP').label = 'V';
            // getHTMLtag($item('#taskTitle'), true);
            console.log(`await updateTask(itemData._id, false): `)
            console.log(`await updateTask(${itemData._id}, ${false}): `)
            await updateTask(itemData._id, false);
        }
    } catch (error) {
        console.error(error);
    }
    console.log(`groupEnd: changeCompleteStatus($item, itemData)`)
    console.groupEnd()
}

async function changeHideCompletedStatus($item, itemData) {
    // console.groupCollapsed(`changeCompleteStatus($item, itemData)`)
    console.group(`changeHideCompletedStatus($item, itemData)`)
    try {
        console.log(`try: `)
        if ($item('#taskCompleteButton').checked === true) {
            // $item('#taskCompleteButtonDEP').label = '';
            console.log(`$item('#taskCompleteButton').checked === true [${$item('#taskCompleteButton').checked}]`)
            // getHTMLtag($item('#taskTitle'), false);
            console.log(`await updateTask(itemData._id, true, 'hideCompleted'): `)
            console.log(`await updateTask(${itemData._id}, ${true}, 'hideCompleted'): `)
            await updateTask(itemData._id, true, 'hideCompleted');
        } else {
            console.log(`ELSE: INERT`)
            // console.log(`ELSE: $item('#taskCompleteButton').checked === true [${$item('#taskCompleteButton').checked}]`)
            // $item('#taskCompleteButtonDEP').label = 'V';
            // getHTMLtag($item('#taskTitle'), true);
            // console.log(`await updateTask(itemData._id, false): `)
            // console.log(`await updateTask(${itemData._id}, ${false}): `)
            // await updateTask(itemData._id, false);
        }
    } catch (error) {
        console.error(error);
    }
    console.log(`groupEnd: changeCompleteStatus($item, itemData)`)
    console.groupEnd()
}

// instead of waiting for each remove action to complete, we call the remove function asynchronously and store the promise returned by each
// call in removePromises array. We use Promise.all in order to wait for all calls to complete before returning from the function
async function clearCompletedTasks() {
    let removePromises = [];
    let remainedTasks = [];
    $w('#taskRPTR').forEachItem(async ($item, itemData) => {
        if ($item('#taskCompleteButtonDEP').label === 'V') {
            const removePromise = removeTask(itemData._id);
            removePromises.push(removePromise);
        } else {
            remainedTasks.push(itemData);
        }
    });
    try {
        await Promise.all(removePromises);
    } catch (error) {
        console.error(error);
    }
    $w('#taskRPTR').data = remainedTasks;
}
async function hideCompletedTasks() {
    // console.groupCollapsed(`hideCompletedTasks()`)
    console.group(`hideCompletedTasks()`)
    let hidePromises = [];
    let hiddenTasks = [];
    let remainedTasks = [];
    $w('#taskRPTR').forEachItem(async ($item, itemData) => {
        if ($item('#taskCompleteButton').checked === true) {
    // if ($item('#taskCompleteButtonDEP').label === 'V') {
            hiddenTasks.push(itemData);
            const hidePromise = hideTask(itemData._id);
            hidePromises.push(hidePromise);
        } else {
            remainedTasks.push(itemData);
        }
    });
    try {
        await Promise.all(hidePromises);
    } catch (error) {
        console.error(error);
    }
    console.log(`hiddenTasks: [array below]`)
    console.dir(hiddenTasks)
    console.log(`remainedTasks: [array below]`)
    console.dir(remainedTasks)
    $w('#taskRPTR').data = remainedTasks;
    console.log(`groupEnd: hideCompletedTasks()`)
    console.groupEnd()

}

function getHTMLtag(taskTitle, del) {
    if (del) {
        taskTitle.html = `<p style="font-family:${htmlFontFamily}; font-size:${htmlFontSize}"><del>${taskTitle.text}</del></p>`;
    } else {
        taskTitle.html = `<p style="font-family:${htmlFontFamily}; font-size:${htmlFontSize}">${taskTitle.text}</p>`;
    }
}

function changeStateMSBX(state = 'filter',wIdMSBX = 'taskRptrMgrMSBX'){
    let wIdBTTN = state.substr(0,1).toUpperCase() + state.substr(1).toLowerCase()
    wIdBTTN = `#msBx${wIdBTTN}TabBTTN`
    wIdMSBX = wIdMSBX.substr(0,1) === '#' ? wIdMSBX : '#' + wIdMSBX
    let theseStates = $w(wIdMSBX).states;
    console.log(`theseStates = $w(wIdMSBX).states => $w(${wIdMSBX}).states`)
    console.dir(theseStates)
 
    const wIdTabButtonArray = theseStates.map((state) => {
        return `#msBx`+state.id.substr(0,1).toUpperCase()+state.id.substr(1).toLowerCase()+`TabBTTN`
        })
    console.log(`wIdTabButtonArray: [mapped array]`)
    console.dir(wIdTabButtonArray)
    let unrenderedTabButtonArray = []
    let renderedManualTabButtonArray = ['msBxFilterTabBTTN','msBxManageTabBTTN']
    // <ENABLE ALL HERE>
    for (const wIdTabButton of wIdTabButtonArray) {
        console.log(`$w(wIdTabButton).rendered: $w(${wIdTabButton}).rendered: ${$w(wIdTabButton).rendered}`)
        if($w(wIdTabButton).rendered){
            $w(wIdTabButton).enable()
        }else{
            unrenderedTabButtonArray.push(wIdTabButton)
        }
    }
    console.log(`unrenderedTabButtonArray: [mapped array else]`)
    console.dir(unrenderedTabButtonArray)
    console.log(`renderedManualTabButtonArray: [mapped array else]`)
    console.dir(renderedManualTabButtonArray)
    // </ENABLE ALL HERE>
    // console.log(`$w(wIdBTTN).disable(): $w(${wIdBTTN}).disable()`)
    $w(wIdBTTN).disable()
    $w(wIdMSBX).changeState(state);
}

export function msBxFilterTabBTTN_click(event) {
	changeStateMSBX('filter')
}

export function msBxManageTabBTTN_click(event) {
    // let wIdBTTN = '#msBxManageTabBTTN'
	changeStateMSBX('manage')
}

// ø <manage Repeater by selectStar showByISO>
function resetLocalShowByISO(){
        local.setItem('localShowByISO', (new Date).toISOString())
        $w('#localShowByIsoINPT').value = local.getItem('localShowByISO')
}
function setLocalFilterArrayByISO(kind = 'RESET', filter = 'NNULL'){
        let filterArray = local.getItem('localFilterArrayByISO') ? local.getItem('localFilterArrayByISO').split(',') : []
        switch (kind) {
            case 'RESET':
                filterArray = []
                break;
        
            default:
                // case 'RESET':
                filterArray = ['RESET_DEFAULT']
                break;
        }
        if(filter !== 'NNULL'){
            filterArray.push(filter)
        }
        if(filterArray.length >= 1){
            $w('#filterExtendBTTN').enable()
            $w('#filterConstrainBTTN').enable()
        }
        local.setItem('localFilterArrayByIso', filterArray.toString())
        $w('#localFilterArrayByIsoINPT').value = `'` + local.getItem('localFilterArrayByIso') + `'`
}
function applyFilterToSourceTable(filter){
    let nowISO = (new Date).toISOString()
    // taskSourceTBL
    for (const row of $w('#taskSourceTBL').rows) {
        applyFilterToSourceRow(row, filter, nowISO)
    }
}

function applyFilterToSourceRow(row = {}, filter = 'NNULL', nowISO = 'nowOBAMA'){
    // ! BETTER: use proto-methods, but too deep in the weeds for now
    let updateShowByISO = false
    switch (filter) {
        case 'ALL_CRRNT':
            updateShowByISO = false
            
            break;
    
        default:
            
            break;
    }
    if(updateShowByISO){
        row.showByISO = nowISO        
    }
}

function renderRepeaterByLocalShowByISO(){

}
// ø </manage Repeater by selectStar showByISO>

// ø NOTES:
/*
HTML:#1D2CF3
RGB:29  44  243
ORIGINAL
HTML:#3746FF
RGB:55  70  255
LIGHTENED:10%
HTML:#505FFF
RGB:80  95  255
LIGHTENED:20%
HTML:#6A79FF
RGB:106  121  255
LIGHTENED:30%
HTML:#8392FF
RGB:131  146  255
LIGHTENED:40%
HTML:#9CABFF
RGB:156  171  255
LIGHTENED:50%
*/

function filterTableToRepeaterFullStack(paramObject = {}){
    ticktock.push(`Entering: filterTableToRepeaterFullStack(paramObject)`)
    developerEchoOnly_TO_DELETE(paramObject)
}

function developerEchoOnly_TO_DELETE(paramObject = {}){
    // console.groupCollapsed(`developerEchoOnly_TO_DELETE(paramObject)`)
    console.group(`developerEchoOnly_TO_DELETE(paramObject)`)
    let ticktockBulletList = ' • ' + ticktock.join('\n • ')
    $w('#developerResponseTXTBX').value = ticktockBulletList
    console.dir(`paramObject: [object below]`)
    console.dir(paramObject)
    console.log(`groupEnd: developerEchoOnly_TO_DELETE(paramObject)`)
    console.groupEnd()
}

/**
*	Adds an event handler that runs when the element is clicked.
	[Read more](https://www.wix.com/corvid/reference/$w.ClickableMixin.html#onClick)
*	 @param {$w.MouseEvent} event
*/
export function filterResetBTTN_click(event) {
    let kind = 'RESET'
    let filter = $w('#taskKindFilterDRPDWN').value
	setLocalFilterArrayByISO(kind,filter)
}

/**
*	Adds an event handler that runs when the element is clicked.
	[Read more](https://www.wix.com/corvid/reference/$w.ClickableMixin.html#onClick)
*	 @param {$w.MouseEvent} event
*/
export function filterExtendBTTN_click(event) {
	// This function was added from the Properties & Events panel. To learn more, visit http://wix.to/UcBnC-4
	// Add your code for this event here: 
}

/**
*	Adds an event handler that runs when the element is clicked.
	[Read more](https://www.wix.com/corvid/reference/$w.ClickableMixin.html#onClick)
*	 @param {$w.MouseEvent} event
*/
export function filterConstrainBTTN_click(event) {
	// This function was added from the Properties & Events panel. To learn more, visit http://wix.to/UcBnC-4
	// Add your code for this event here: 
}

/**
*	Adds an event handler that runs when the element is clicked.
	[Read more](https://www.wix.com/corvid/reference/$w.ClickableMixin.html#onClick)
*	 @param {$w.MouseEvent} event
*/
export function justResetFauxBTTN_click(event) {
    let kind = 'RESET'
    ticktock.push(`justResetFauxBTTN_click: CLICKED`)
    // let filter = $w('#taskKindFilterDRPDWN').value
	// setLocalFilterArrayByISO(kind)
    let paramObject = {}
    paramObject.kind = kind
    filterTableToRepeaterFullStack(paramObject)
}