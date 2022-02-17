// ! <SEACHABLE-TYPOGRAPY>
/*
≈ => searchable approximate line numbers (in console log)
    examples:
    ≈123≈ approximate line number 123
    ≈456≈X≈ approximate line number 456 console log is ready to be deleted
§ => indcates a console.log that just echo's the step (usually to test the logic path)
🄾 => incomplete task
🅇 => completed task
*/
// ! </SEACHABLE-TYPOGRAPY>

// ! <SUPER_OBJECT IMPORT>
import superObject from "/Users/brad/Documents/bradRepositories/vsCode/btlBestPracticesLocal/btlBestPractices/logs/2008PRE_superObject_3607.json"
// path: /Users/brad/Documents/bradRepositories/vsCode/btlBestPracticesLocal/btlBestPractices/logs/2008PRE_superObject_3607.json
let drupalCoursePRE = superObject.drupalPRE
let wixCoursePRE = superObject.wixPRE
let drupalCoursePST = superObject.drupalPST
let wixCoursePST = superObject.wixPST
// ! </SUPER_OBJECT IMPORT>
// ! <OBJECT_KEYS_OBJECT IMPORT>
import objectKeysObject from "/Users/brad/Documents/bradRepositories/vsCode/btlBestPracticesLocal/btlBestPractices/logs/2008DEVEL_objectKeysObject.json";
//pathNEW: /Users/brad/Documents/bradRepositories/vsCode/btlBestPracticesLocal/btlBestPractices/logs/2008DEVEL_objectKeysObject.json
// ! </OBJECT_KEYS_OBJECT IMPORT>

// ø  <IMPORT-Components Console-Log>
// ø ø <SUPER_OBJECT>
// console.warn('drupalCoursePRE: [object below]')
// console.dir(drupalCoursePRE)
// console.warn('wixCoursePRE: [object below]')
// console.dir(wixCoursePRE)
// console.warn('drupalCoursePST: [object below]')
// console.dir(drupalCoursePST)
// console.warn('wixCoursePST: [object below]')
// console.dir(wixCoursePST)
// ø ø </SUPER_OBJECT>
// ø ø <OBJECT_KEYS_OBJECT IMPORT>
// console.log(`objectKeysObject: [object below]`)
// ø TEST_COLLECTION_displayDrupalWixPst_FUNCT
// console.dir(objectKeysObject)
// console.log(`Object.keys(objectKeysObject): [object below]`)
// console.dir(Object.keys(objectKeysObject))
// console.log(`objectKeysObject.wixADJUST: [object below]`)
// console.dir(objectKeysObject.wixADJUST)
// ø ø </OBJECT_KEYS_OBJECT IMPORT>
// ø  </IMPORT-Components Console-Log>



// ø ==================================================
// ø ==================================================
// ø ==================================================
// ø ==================================================
// ø ==================================================
// any variable named `somethingString` CAN be PIPED
// ↪ `somethingString.split('|')`
// ↪ if necessary, but default is no pipes
// ↪ dream up some row structure of the `somethingString` if you like
// testUnit.code if prefixed with '≈' is 'pseudo-code' not actual code => usefule when too long
// ø <TESTING>
let paramObject = {}
// ø TEST_COLLECTION_MANUAL_PARAMS
// ø => params now with _CALL
// ø ---
// ø TEST_COLLECTION_displayDrupalWixPst_CALL
// ø ↪ no longer call in this block, step below
// ø TEST_COLLECTION_displayDrupalWixPst_FUNCT
// ø TEST_COLLECTION_comparisonDrupalToWixRecords
// ø TEST_COLLECTION_DRP_WIX_MAIN
// ø ---
// ø ---
// ø TEST_COLLECTION_displayPrePstWix_CALL
// ø ↪ no longer call in this block, step below
// ø TEST_COLLECTION_displayPrePstWix_FUNCT
// ø TEST_COLLECTION_WIX_WIX_MAIN => comparisonWixToWixRecords()
// ø ---
// ø TEST_COLLECTION_AB_COLLECTION_FOREACH => byTestCollectionObjectAObjectB()
// ø TEST_COLLECTION_AB_UNIT_TO_COLLECTION_ARRAY_APPEND => testCollectionAppend()
// ø TEST_COLLECTION_AB_UNIT_SWITCH => byTestUnitObjectAObjectB()
// ø ---
// ø TEST_COLLECTION_AB_STRING_ECHO_UNIT
// ø TEST_COLLECTION_AB_MATCH_UNIT
// ø TEST_COLLECTION_AB_INCREMENT_UNIT
// ø TEST_COLLECTION_AB_UNSUPPORTED_UNIT
// ø ---
// ø TEST_COLLECTION_AB_UNIT_APPLY_REPORT_ROW
// ø ---
// ø TEST_COLLECTION_REPORT_COLLECTOR ¡¡¡EMPTY!!! ≈X≈
// ø TEST_COLLECTION_REPORT_ROW_PREP
// ø TEST_COLLECTION_REPORT_ROW_DISPLAY ¡SINGLETON!
// ø TEST_COLLECTION_REPORT_STRING_PREP
// ø TEST_COLLECTION_REPORT_STRING_DISPLAY ¡SINGLETON!
// ø TEST_COLLECTION_REPORT_PADDING_PREP
// ø ---
// ø TEST_COLLECTION_REPORT_DISPLAY
// ø </TESTING>
// ø ==================================================
// ø ==================================================
// ø ==================================================
// ø ==================================================
// ø ==================================================


// ø ==================================================
// ø TEST_COLLECTION_displayPrePstWix_CALL
// const doCall_displayPrePstWix = false
const doCall_displayPrePstWix = true
// ø ==================================================
// ø TEST_COLLECTION_displayDrupalWixPst_CALL
const doCall_displayDrupalWixPst = false
// const doCall_displayDrupalWixPst = true
// ø ==================================================
// ø TEST_COLLECTION_displayPrePstWix_CALL
if (doCall_displayPrePstWix) {
    paramObject.contentParamObject = {}
    paramObject.contentParamObject.testKind = 'ADJUST'
    // paramObject.contentParamObject.testKind = 'ENROLL'
    paramObject.contentParamObject.incrementValue = 1
    paramObject.displayParamObject = {}
    paramObject.displayParamObject.title = 'Title by Param'
    paramObject.displayParamObject.subTitle = 'Sub-Title by Param'
    paramObject.displayParamObject.passFalseString = 'zFALSE_STRINGz'
    paramObject.displayParamObject.paddingAppicableForAssertionArray = ['MATCH','INCREMENT']
    paramObject.unitParamObject = {}
    paramObject.unitParamObject.which = 'WHICH'
    displayPrePstWix(wixCoursePRE, wixCoursePST, paramObject)
}
// ø ---
// displayPrePstDrupal(drupalCoursePRE,drupalCoursePST)
// displayDrupalWixPre(drupalCoursePRE,wixCoursePRE)
// ø TEST_COLLECTION_displayDrupalWixPst_CALL
if (doCall_displayDrupalWixPst) {

    paramObject.contentParamObject = {}
    paramObject.contentParamObject.testKind = 'ADJUST'
    // paramObject.contentParamObject.testKind = 'ENROLL'
    paramObject.contentParamObject.incrementValue = 1
    paramObject.displayParamObject = {}
    paramObject.displayParamObject.title = 'MAIN-Title by Param'
    paramObject.displayParamObject.subTitle = 'SUB-Title by Param'
    paramObject.displayParamObject.passFalseString = 'SSEEKKIIYY'
    paramObject.displayParamObject.paddingAppicableForAssertionArray = ['MATCH','INCREMENT']
    paramObject.unitParamObject = {}
    paramObject.unitParamObject.which = 'WHICH'
    displayDrupalWixPst(drupalCoursePST, wixCoursePST, paramObject)
}
// ø ---

// ø TEST_COLLECTION_MANUAL_PARAMS

// ø TEST_COLLECTION_displayPrePstWix_FUNCT
async function displayPrePstWix(preWixRecord = {}, pstWixRecord = {}, paramObject = {}) {
    console.warn('Logic to Robustly Display the progress of the Wix Record PRE-Test to PST-Test')
    // ø TEST_COLLECTION_WIX_WIX_MAIN ¡CALL!
    let response = comparisonWixToWixRecords(preWixRecord, pstWixRecord, paramObject)
    
    // ø TEST_COLLECTION_REPORT_COLLECTOR ¡¡¡EMPTY!!! ¡CALL! ≈X≈
    // testCollectionReportCollector(response.testCollection, paramObject.displayParamObject)

    // ø TEST_COLLECTION_REPORT_ROW_PREP ¡CALL!
    await testCollectionReportRowPrep(response.testCollection, paramObject.displayParamObject)

    // ø TEST_COLLECTION_REPORT_STRING_PREP ¡CALL!
    await testCollectionReportStringPrep(response.testCollection, paramObject.displayParamObject)

    // ø TEST_COLLECTION_REPORT_PADDING_PREP ¡CALL!
    await testCollectionReportPaddingPrep(response.testCollection, paramObject.displayParamObject)
    console.warn(`paramObject.displayParamObject.maxColCount: ${paramObject.displayParamObject.maxColCount}`)
    console.warn(`paramObject.displayParamObject.maxColPaddingArray: [${paramObject.displayParamObject.maxColPaddingArray}]`)
    console.warn(`paramObject.displayParamObject.columnAlignmentArray: [${paramObject.displayParamObject.columnAlignmentArray}]`)
    console.warn(`paramObject.displayParamObject.paddingAppicableForAssertionArray: [${paramObject.displayParamObject.paddingAppicableForAssertionArray}]`)
    // console.warn(`paramObject.displayParamObject: ${JSON.stringify(paramObject.displayParamObject)}`)
    // console.warn(`paramObject: ${JSON.stringify(paramObject)}`)
    
    // const reportRowDisplayHeaderFilter = response.testCollection.filter((testUnit) => {
    //     return testUnit.assertion === 'HEADER'
    // })
    // console.warn(`<YIKES: zCOMMAz>`)
    // console.warn(`reportRowDisplayHeaderFilter: NOTE: reportStringDisplay: [single item array below]`)
    // console.dir(reportRowDisplayHeaderFilter)
    // console.warn(`</YIKES: zCOMMAz>`)
    
    const reportRowDisplayMap = response.testCollection.map((testUnit) => {
        return testUnit.reportStringDisplay
    })
    console.warn(`reportRowDisplayMap: NOTE: reportStringDisplay: [array below]`)
    console.dir(reportRowDisplayMap)
    
    // console.warn(`response.testCollection: NOTE: response.testCollection.reportStringDisplay: [array below]`)
    // console.dir(response.testCollection)
    // testCollectionReportDisplay(response.testCollection, paramObject.displayParamObject)
    // console.log(JSON.stringify(response,undefined,4))
    // ø TEST_COLLECTION_REPORT_DISPLAY ¡CALL!
    testCollectionReportDisplay(response.testCollection, paramObject.displayParamObject)
    console.warn(`paramObject.displayParamObject.columnAlignmentArray: ${paramObject.displayParamObject.squaredPadding}`)
}
function displayPrePstDrupal(preDrupalRecord = {}, pstDrupalRecord = {}, paramObject = {}) {
    console.warn('Logic to Robustly Display the progress of the Drupal Record PRE-Test to PST-Test')
    displayDrupalRecordData(preDrupalRecord, '\npreDrupalRecord\n===============')
    displayDrupalRecordData(pstDrupalRecord, '\npstDrupalRecord\n===============')
    console.warn(`\nobjectKeysObject.drupal: \n[${objectKeysObject.drupal}]`)
    console.warn(`\nobjectKeysObject.both: \n[${objectKeysObject.both}]`)
}
function displayDrupalWixPre(preDrupalRecord = {}, preWixRecord = {}, paramObject = {}) {
    console.warn('Logic to Robustly Display the comparison of the PRE-Test state of Drupal Record and the Wix Record')
    displayDrupalRecordData(preDrupalRecord, '\npreDrupalRecord\n===============')
    displayWixRecordData(preWixRecord, '\npreWixRecord\n============')
    console.warn(`\nobjectKeysObject.drupal: \n[${objectKeysObject.drupal}]`)
    console.warn(`\nobjectKeysObject.wix: \n[${objectKeysObject.wix}]`)
    console.warn(`\nobjectKeysObject.both: [${objectKeysObject.both}]`)
}
// ø TEST_COLLECTION_comparisonDrupalToWixRecords
function displayDrupalWixPst(pstDrupalRecord = {}, pstWixRecord = {}, paramObject = {}) {
    console.warn('Logic to Robustly Display the comparison of the PST-Test state of Drupal Record and the Wix Record')
    // displayDrupalRecordData(preDrupalRecord, '\npreDrupalRecord\n===============')
    // displayWixRecordData(pstWixRecord, '\npreWixRecord\n============')
    // console.warn(`Force return`)
    // return
    // console.warn(`pstWixRecord.regionKey: ${pstWixRecord.regionKey}`)
    // ø TEST_COLLECTION_comparisonDrupalToWixRecords ¡CALL!
    let response = comparisonDrupalToWixRecords(pstDrupalRecord, pstWixRecord, paramObject)
    // console.warn(`Force return`)
    // console.warn(`↪ from displayDrupalWixPst`)
    // return
    let title = ''
    let subTitle = ''
    let report = testCollectionReport(response.testCollection, paramObject.displayParamObject)
    // console.log(JSON.stringify(response,undefined,4))
}
// console.warn(`\nobjectKeysObject.both: [${objectKeysObject.both}]`)
function displayDrupalRecordData(drupalRecordThis = {}, descr = 'DEFAULT DRUPAL DESCRIPTION') {
    let keys = Object.keys(drupalRecordThis)
    let displayTheseKeys = ['enrollExcptn', 'sectionCount', 'min', 'max', 'waitList', 'enrollmentCount', 'enrollmentHardCount', 'waitlistCount', 'waitlistHardCount']
    console.warn(descr)
    console.warn(`keys: [${keys}]`)
    console.warn(`displayTheseKeys: [${displayTheseKeys}]`)
}
function displayWixRecordData(wixRecordThis = {}, descr = 'DEFAULT WIX DESCRIPTION') {
    console.warn(descr)
    let keys = Object.keys(wixRecordThis)
    let displayTheseKeys = ['enrollExcptn', 'sectionCount', 'min', 'max', 'waitList', 'enrollmentCount', 'enrollmentHardCount', 'waitlistCount', 'waitlistHardCount']
    console.warn(`keys: [${keys}]`)
    console.warn(`displayTheseKeys: [${displayTheseKeys}]`)
}
// ø TEST_COLLECTION_DRP_WIX_MAIN
function comparisonDrupalToWixRecords(drupalRecord = {}, wixRecord = {}, paramObject = {}) {
    console.warn(`wixRecord.regionKey: ${wixRecord.regionKey}`)
    let responseObject = {}
    // console.warn(`§ENTERING comparisonDrupalToWixRecords(drupalRecord, wixRecord)`)
    // console.warn(`Force return`)
    // return
    let testCollection = []//that is DrupalToWix tests
    // const matchKeyArray = ['_id','courseKey','sectionCount','enrollExcptn','courseOptions','min']
    // const matchKeyArray = ['_id','courseKey','sectionCount','enrollExcptn','courseOptions']
    const keyArray = ['_id', 'courseKey', 'sectionCount', 'enrollExcptn', 'courseOptions', ['NNULL', 'min']]
    let assertion = 'MATCH'
    testCollectionAppend(testCollection, assertion, keyArray)
    // console.warn(`testCollection: [array of objects below]`)
    // console.dir(testCollection)
    // console.warn(`Force return`)
    // console.warn(`↪from comparisonDrupalToWixRecords testCollection MATCH_KEY_ARRAY`)
    // return
    let testUnitThis = {}
    // ø <UnitTest>
    // testUnitThis = {}
    // testUnitThis = {}
    // testUnitThis.assertion = 'MATCH'
    // testUnitThis.notes = ['testUnit initial note']
    // testUnitThis.key = '_id'
    // testCollection.push(testUnitThis)
    // ø </UnitTest>
    console.warn(`≈207≈ testCollection: [array of objects below]`)
    console.dir(testCollection)
    // console.warn(`Force return`)
    // console.warn(`↪from comparisonDrupalToWixRecords testCollection MANUAL`)
    // return
    byTestCollectionObjectAObjectB(drupalRecord, wixRecord, testCollection)
    responseObject.testCollection = testCollection
    return responseObject
}
// ø TEST_COLLECTION_WIX_WIX_MAIN
function comparisonWixToWixRecords(wixRecordA = {}, wixRecordB = {}, paramObject = {}) {
    let testKind = paramObject.contentParamObject.testKind
    const supportedTestKindArray = ['ADJUST', 'ENROLL']
    if (!supportedTestKindArray.includes(testKind)) {
        let responseObjectKludge = { "error": "!supportedTestKindArray.includes(testKind)" }
        console.warn('responseObjectKludge: [error object below]')
        console.dir(responseObjectKludge)
        console.warn(`Force return`)
        console.warn(`↪from comparisonWixToWixRecords => ERROR`)
        return
    }
    let responseObject = {}
    let testCollection = []//that is WixAToWixB tests

    let wixEnrollKeyArrayObject = {}
    if (testKind === 'ADJUST') {
        wixEnrollKeyArrayObject = objectKeysObject.wixADJUST
    }
    if (testKind === 'ENROLL') {
        wixEnrollKeyArrayObject = objectKeysObject.wixENROLL
    }
    // const /*<NO ORDER>*/keyArrayKeyArray = [ 'INCREMENT', 'MATCH', 'REPORT', 'HEADER', 'SUBHEADER' ]
    // const keyArrayKeyArray = ['HEADER', 'MATCH']//zxz
    // const keyArrayKeyArray = [ 'HEADER', 'SUBHEADER', 'MATCH']
    const keyArrayKeyArray = ['HEADER', 'SUBHEADER', 'INCREMENT', 'MATCH']
    // const keyArrayKeyArray = [ 'HEADER', 'SUBHEADER', 'INCREMENT', 'MATCH', 'REPORT'  ]//zxz
    // console.warn(`wixEnrollKeyArrayObject: [object below]`)
    // console.dir(wixEnrollKeyArrayObject)
    // console.warn(`wixEnrollKeyArrayObject: [array below]`)
    // console.dir(Object.keys(wixEnrollKeyArrayObject))

    for (let index = 0; index < keyArrayKeyArray.length; index++) {
        const arrayKey = keyArrayKeyArray[index];
        // ø <Assertion>
        let cardinal = index + 1
        paramObject.unitParamObject.cardinal = cardinal
        // if(cardinal === 1){
        //     console.warn(`≈283≈X≈ paramObject: [¿full? paramObject object below]`)
        //     console.dir(paramObject)
        // }
        // let assertion = 'ASSERTION_KEY'
        // assertion = 'HEADER'
        // console.warn(`wixEnrollKeyArrayObject[arrayKey]: wixEnrollKeyArrayObject.${arrayKey}: [object below]`)
        // console.dir(wixEnrollKeyArrayObject[arrayKey])
        testCollectionAppend(testCollection, arrayKey, wixEnrollKeyArrayObject[arrayKey], paramObject)
        // ø </Assertion>
    }
    // ø <Assertion: HEADER>
    // let assertion = 'ASSERTION_KEY'
    // assertion = 'HEADER'
    // console.warn(`wixEnrollKeyArrayObject[assertion]: wixEnrollKeyArrayObject.${assertion}: [object below]`)
    // console.dir(wixEnrollKeyArrayObject[assertion])
    // testCollectionAppend(testCollection, assertion, wixEnrollKeyArrayObject[assertion])
    // ø </Assertion: HEADER>
    // ø <Assertion: MATCH>
    // assertion = 'MATCH'
    // console.warn(`wixEnrollKeyArrayObject[assertion]: wixEnrollKeyArrayObject.${assertion}: [object below]`)
    // console.dir(wixEnrollKeyArrayObject[assertion])
    // testCollectionAppend(testCollection, assertion, wixEnrollKeyArrayObject.MATCH)
    // ø </Assertion: MATCH>
    // console.warn(`≈271≈ testCollection: [array of objects below]`)
    // console.dir(testCollection)

    // console.warn(`Force return`)
    // console.warn(`↪from comparisonWixToWixRecords`)
    // return

    // ø <UnitTest>
    // let testUnitThis = {}
    // testUnitThis = {}
    // testUnitThis.assertion = 'MATCH'
    // testUnitThis.notes = ['testUnit initial note']
    // testUnitThis.key = '_id'
    // testCollection.push(testUnitThis)
    // ø <UnitTest>

    byTestCollectionObjectAObjectB(wixRecordA, wixRecordB, testCollection, paramObject)
    responseObject.testCollection = testCollection
    return responseObject
}
// ø TEST_COLLECTION_AB_COLLECTION_FOREACH
function byTestCollectionObjectAObjectB(objectA = {}, objectB = {}, testCollection = [], paramObject = {}) {
    objectA.keyCount = Object.keys(objectA).length
    objectB.keyCount = Object.keys(objectB).length
    // console.warn(`≈307≈ objectB.regionKey: ${objectB.regionKey}`)
    // let responseObject = {}
    // console.warn(`§ENTERING byTestCollectionObjectAObjectB(objectA, objectB, testCollection)`)
    // console.warn(`Force return`)
    // console.warn(`from byTestCollectionObjectAObjectB`)
    // return
    for (let index = 0; index < testCollection.length; index++) {
        const testUnit = testCollection[index];
        testUnit.notes.push(`ITERATING const testUnit[${index}]`)
        byTestUnitObjectAObjectB(objectA, objectB, testUnit)
    }

}
// ø TEST_COLLECTION_AB_UNIT_SWITCH
function byTestUnitObjectAObjectB(objectA = {}, objectB = {}, testUnit = {}) {
    //PASS_THRU
    // console.warn(`§ENTERING byTestCollectionObjectAObjectB(objectA, objectB, testUnit)`)
    // console.warn(`testUnit [object below]`)
    // console.dir(testUnit)
    // console.warn(`Force return`)
    // return
    testUnit.notes.push('ENTERING byTestUnitObjectAObjectB')
    testUnit.response = {}
    testUnit.response.passBoolean = true
    testUnit.response.failString = ''
    testUnit.response.failCode = ''
    //assume TRUE
    // supportedAssertionArray = ['MATCH']// case-blocks & functions for each
    switch (testUnit.assertion.toUpperCase()) {
        case 'MATCH':
            testUnit.notes.push(`switch (testUnit.assertion.toUpperCase): switch (${testUnit.assertion.toUpperCase()})|case 'MATCH':`)
            // console.warn(`Force return`)
            // return
            testMatch(objectA, objectB, testUnit)
            break;
        case 'INCREMENT':
            testUnit.notes.push(`switch (testUnit.assertion.toUpperCase): switch (${testUnit.assertion.toUpperCase()})|case 'MATCH':`)
            // console.warn(`Force return`)
            // return
            testIncrement(objectA, objectB, testUnit)
            break;
        case 'HEADER':
            testUnit.notes.push(`switch (testUnit.assertion.toUpperCase): switch (${testUnit.assertion.toUpperCase()})|case 'MATCH':`)
            // console.warn(`Force return`)
            // return
            testStringEcho(objectA, objectB, testUnit)
            break;
        case 'SUBHEADER':
            testUnit.notes.push(`switch (testUnit.assertion.toUpperCase): switch (${testUnit.assertion.toUpperCase()})|case 'MATCH':`)
            // console.warn(`Force return`)
            // return
            testStringEcho(objectA, objectB, testUnit)
            break;
        case 'REPORT':
            testUnit.notes.push(`switch (testUnit.assertion.toUpperCase): switch (${testUnit.assertion.toUpperCase()})|case 'MATCH':`)
            // console.warn(`case 'REPORT':`)
            // console.warn(`Force return`)
            // return
            testStringEcho(objectA, objectB, testUnit)
            break;

        default:
            testUNSUPPORTED(objectA, objectB, testUnit)
            break;
    }
}

// ø TEST_COLLECTION_AB_UNIT_TO_COLLECTION_ARRAY_APPEND
// ø NOTE: no paramObject 
function testCollectionAppend(testCollection = [], assertion = 'OTHER', keyArray = [],paramObject = {}) {
    for (let index = 0; index < keyArray.length; index++) {
        const key = keyArray[index];

        // ø <UnitTest>
        let testUnitThis = {}
        testUnitThis = {}
        testUnitThis.assertionCardinal = index + 1 
        testUnitThis.assertion = assertion.toUpperCase()
        testUnitThis.notes = [`${key}: testUnit initial note`]
        testUnitThis.key = key
        testCollection.push(testUnitThis)
        // ø </UnitTest>
    }

}
// ø <AB_UnSUPPORTED_UNIT>
// ø TEST_COLLECTION_AB_UNSUPPORTED_UNIT
function testUNSUPPORTED(objectA = {}, objectB = {}, testUnit = {}) {
    // console.warn(`§ENTERING testUNSUPPORTED(objectA, objectB, testUnit)`)
    /**
     * ø NOTES:
     * ø ======
     * ø 🅇 EMPTY OUT
     * ø 🅇 fix index
     * ø 🅇 reportString
     * ø 🅇 reportRow
     */
     testUnit.keyCountA = objectA.keyCount
     testUnit.keyCountB = objectB.keyCount
 
    testUnit.assertion = typeof testUnit.assertion === undefined ? 'UNDEFINED' : 'UNSUPPORTED=' + testUnit.assertion
    testUnit.response = {}
    testUnit.response.passBoolean = false
    testUnit.response.falseString = 'zFALSE_STRINGz'
    testUnit.response.failString = `Un-Supported`
    testUnit.response.failCode = `switch (${testUnit.assertion.toUpperCase()}) => default:`
    testUnit.response.key = testUnit.key
    testUnit.response.valueString = testUnit.response.failString
    testUnitApplyRow(testUnit)
    // testUnit.reportLine = `999. ${testUnit.response.key}: ${testUnit.response.valueString}|`
    // testUnit.reportRow = `${testUnit.assertion}|999|${testUnit.response.key}|${testUnit.response.valueString}|${testUnit.response.falseString}`
    // return
}
// ø </AB_UnSUPPORTED_UNIT>
// ø <AB_ECHO_UNIT>
// ø TEST_COLLECTION_AB_STRING_ECHO_UNIT
function testStringEcho(objectA = {}, objectB = {}, testUnit = {}) {
    /**
     * ø NOTES:
     * ø ======
     * ø 🅇 if any validation, log EXCEPTION only
     * ø 🅇 only exception NULL && NULL (NA && NA)
     * ø 🅇 keyis ALWAYS singleton
     * ø 🄾 two values zEQz(=) separated
     * ø 🅇 value EXPECTED to be singleton
     * ø 🄾 fix index
     * ø 🅇 reportString
     * ø 🅇 reportRow
     */
    // console.warn(`§ENTERING testStringEcho(objectA, objectB, testUnit)`)
    let which = testUnit.assertion.toUpperCase()
    testUnit.keyCountA = objectA.keyCount
    testUnit.keyCountB = objectB.keyCount
    const supportedWhichArray = ['HEADER', 'SUBHEADER', 'REPORT']
    if (!supportedWhichArray.includes(which)) {
        testUnit.notes.push(`Unsupported 'which' [${which}]`)
        testUnitApplyRow(testUnit)
        return
    }
    // console.warn(`Force return`)
    // return
    testUnit.response.key = ''
    testUnit.response.valueString = ''
    testUnit.notes.push('ENTERING testMatch [of comparisonTest]')
    let testUnitKeyIsValid = typeof testUnit.key === 'object' && Array.isArray(testUnit.key) ? true : false
    testUnitKeyIsValid = typeof testUnit.key === 'string' ? true : testUnitKeyIsValid
    testUnit.response.falseString = ''
    testUnit.response.passBoolean = true
    if (!testUnitKeyIsValid) {
        testUnit.response.passBoolean = false
        testUnit.response.falseString = 'zFALSE_STRINGz'
        testUnit.response.failString = 'testUnit.key is InValid'
        testUnit.response.failCode = `≈ neither array nor string`
        testUnit.response.key = 'UNKNOWN'
        testUnit.response.valueString = testUnit.response.failCode
        testUnitApplyRow(testUnit)
        return
    }
    let keyA = typeof testUnit.key === 'string' ? testUnit.key : testUnit.key[0]
    let keyB = typeof testUnit.key === 'string' ? testUnit.key : testUnit.key[1]
    testUnit.notes.push(`keyA: ${keyA} ; keyB: ${keyB} ; `)
    testUnit.response.key = typeof testUnit.key === 'string' ? keyA : `${keyA}•${keyB}`
    let valueArray = []
    let valueSingleton = 'NA'
    testUnit.response.falseString = ''
    testUnit.response.passBoolean = true
    valueSingleton = typeof objectA[keyA] === 'undefined' ? valueSingleton : objectA[keyA].toString()
    valueSingleton = typeof objectB[keyB] === 'undefined' ? valueSingleton : objectB[keyB].toString()
    testUnit.response.valueString = valueSingleton
    testUnit.notes.push(`valueSingleton: [${valueSingleton}]`)
    valueArray.push(valueSingleton)
    testUnit.valueArray = valueArray
    testUnit.notes.push('testUnitKeyIsValid: testUnit.key [array or string]')
    if (valueSingleton === 'NA') {
        testUnit.response.passBoolean = false
        testUnit.response.falseString = 'zzFALSE_STRINGzz'
        testUnit.response.failString = 'neither value is valid'
        testUnit.response.failCode = `valueSingleton === 'NA'`
        testUnitApplyRow(testUnit)
        return
    }
    testUnitApplyRow(testUnit)
    testUnit.notes.push('singletonByEcho')
}
// ø </AB_ECHO_UNIT>
// ø <AB_MATCH_UNIT>
// ø TEST_COLLECTION_AB_MATCH_UNIT
function testMatch(objectA = {}, objectB = {}, testUnit = {}) {
    // console.warn(`§ENTERING testMatch(objectA, objectB, testUnit)`)
    /**
     * ø NOTES:
     * ø ======
     * ø pretty good
     * ø 🄾 fix No_MATCH
     * ø 🄾 use zEQz(=) for separator (not display anymore, data)
     * ø 🄾 fix index
     * ø 🅇 reportString
     * ø 🅇 reportRow

     */

    // console.warn(`Force return`)
    // return

    
    testUnit.keyCountA = objectA.keyCount
    testUnit.keyCountB = objectB.keyCount

    testUnit.response.key = ''
    testUnit.response.valueString = ''
    testUnit.notes.push('ENTERING testMatch [of comparisonTest]')
    let testUnitKeyIsValid = typeof testUnit.key === 'object' && Array.isArray(testUnit.key) ? true : false
    testUnitKeyIsValid = typeof testUnit.key === 'string' ? true : testUnitKeyIsValid
    testUnit.response.falseString = ''
    testUnit.response.passBoolean = true
    if (!testUnitKeyIsValid) {
        testUnit.response.passBoolean = false
        testUnit.response.falseString = 'zFALSE_STRINGz'
        testUnit.response.failString = 'testUnit.key is InValid'
        testUnit.response.failCode = `≈ neither array nor string`
        testUnit.response.key = 'UNKNOWN'
        testUnit.response.valueString = testUnit.response.failCode
        testUnitApplyRow(testUnit)
        return
    }
    let keyA = typeof testUnit.key === 'string' ? testUnit.key : testUnit.key[0]
    let keyB = typeof testUnit.key === 'string' ? testUnit.key : testUnit.key[1]
    testUnit.notes.push(`keyA: ${keyA} ; keyB: ${keyB} ; `)
    testUnit.response.key = typeof testUnit.key === 'string' ? keyA : `${keyA}•${keyB}`
    let valueArray = []
    let valueThis = typeof objectA[keyA] === 'undefined' ? 'NA' : objectA[keyA].toString()
    valueArray.push(valueThis)
    valueThis = typeof objectB[keyB] === 'undefined' ? 'NA' : objectB[keyB].toString()
    valueArray.push(valueThis)
    testUnit.response.valueString = valueArray.join('=')
    testUnit.notes.push(`valueArray: [${valueArray}]`)
    testUnit.valueArray = valueArray
    testUnit.notes.push('testUnitKeyIsValid: testUnit.key [array or string]')
    if (testUnit.valueArray.length < 2) {
        testUnit.response.passBoolean = false
        testUnit.response.falseString = 'zFALSE_STRINGz'
        testUnit.response.failString = 'insufficient values to compare'
        testUnit.response.failCode = `testUnit.valueArray.length < 2`
        testUnitApplyRow(testUnit)
        return
    }
    testUnit.notes.push('testUnit.valueArray => has two or more elements')
    const singletonByMatch = Array.from(new Set(testUnit.valueArray))
    if (singletonByMatch.length > 1) {
        // if (singletonByMatch.length > 2 || (singletonByMatch.length === 1 && singletonByMatch.includes('NA'))) {
        testUnit.response.passBoolean = false
        testUnit.response.falseString = 'zFALSE_STRINGz'
        testUnit.response.failString = 'Set from Array of values contains more than one element'
        testUnit.response.failCode = `singletonByMatch.length > 2 || (singletonByMatch.length === 1 && singletonByMatch.includes('NA'))`
        testUnitApplyRow(testUnit)
        return
    }
    testUnitApplyRow(testUnit)

}
// ø </AB_MATCH_UNIT>
// ø <AB_INCREMENT_UNIT>
// ø TEST_COLLECTION_AB_INCREMENT_UNIT
function testIncrement(objectA = {}, objectB = {}, testUnit = {}) {
    // console.warn(`§ENTERING testMatch(objectA, objectB, testUnit)`)
    /**
     * ø NOTES:
     * ø ======
     * ø Lots to do, but good CLOSE to (original) MATCH
     * ø 🄾 how increment more than one
     * ø 🄾 increment default = 1
     * ø 🄾 valueA + increment === valueB ELSE passBoolean = false
     * ø 🄾 fix index
     * ø 🅇 reportString
     * ø 🅇 reportRow
     */

    // console.warn(`Force return`)
    // return
    testUnit.keyCountA = objectA.keyCount
    testUnit.keyCountB = objectB.keyCount

    testUnit.response.key = ''
    testUnit.response.valueString = ''
    testUnit.notes.push('ENTERING testMatch [of comparisonTest]')
    let testUnitKeyIsValid = typeof testUnit.key === 'object' && Array.isArray(testUnit.key) ? true : false
    testUnitKeyIsValid = typeof testUnit.key === 'string' ? true : testUnitKeyIsValid
    testUnit.response.falseString = ''
    testUnit.response.passBoolean = true
    if (!testUnitKeyIsValid) {
        testUnit.response.passBoolean = false
        testUnit.response.falseString = 'zFALSE_STRINGz'
        testUnit.response.failString = 'testUnit.key is InValid'
        testUnit.response.failCode = `≈ neither array nor string`
        testUnit.response.key = 'UNKNOWN'
        testUnit.response.valueString = testUnit.response.failCode
        testUnitApplyRow(testUnit)
        return
    }
    let keyA = typeof testUnit.key === 'string' ? testUnit.key : testUnit.key[0]
    let keyB = typeof testUnit.key === 'string' ? testUnit.key : testUnit.key[1]
    testUnit.notes.push(`keyA: ${keyA} ; keyB: ${keyB} ; `)
    testUnit.response.key = typeof testUnit.key === 'string' ? keyA : `${keyA}•${keyB}`
    let valueArray = []
    let valueThis = typeof objectA[keyA] === 'undefined' ? 'NA' : objectA[keyA].toString()
    valueArray.push(valueThis)
    valueThis = typeof objectB[keyB] === 'undefined' ? 'NA' : objectB[keyB].toString()
    valueArray.push(valueThis)
    testUnit.response.valueString = valueArray.join('=')
    testUnit.notes.push(`valueArray: [${valueArray}]`)
    testUnit.valueArray = valueArray
    testUnit.notes.push('testUnitKeyIsValid: testUnit.key [array or string]')
    if (testUnit.valueArray.length < 2) {
        testUnit.response.passBoolean = false
        testUnit.response.falseString = 'zFALSE_STRINGz'
        testUnit.response.failString = 'insufficient values to compare'
        testUnit.response.failCode = `testUnit.valueArray.length < 2`
        testUnitApplyRow(testUnit)
        return
    }
    testUnit.notes.push('testUnit.valueArray => has two or more elements')
    const singletonByMatch = Array.from(new Set(testUnit.valueArray))
    testUnit.response.falseString = ''
    testUnit.response.passBoolean = true
    if (singletonByMatch.length > 1) {
        // if (singletonByMatch.length > 2 || (singletonByMatch.length === 1 && singletonByMatch.includes('NA'))) {
        testUnit.response.passBoolean = false
        testUnit.response.falseString = 'zFALSE_STRINGz'
        testUnit.response.failString = 'Set from Array of values contains more than one element'
        testUnit.response.failCode = `singletonByMatch.length > 2 || (singletonByMatch.length === 1 && singletonByMatch.includes('NA'))`
        testUnitApplyRow(testUnit)
        return
    }
    testUnitApplyRow(testUnit)
}
// ø </AB_INCREMENT_UNIT>

// ø TEST_COLLECTION_AB_UNIT_APPLY_REPORT_ROW
function testUnitApplyRow(testUnit = {}){
    testUnit.reportLine = `${testUnit.assertionCardinal}. ${testUnit.response.key}: ${testUnit.response.valueString} => '${testUnit.response.falseString}'`
    testUnit.reportRow = `${testUnit.assertion}|${testUnit.keyCountA}|${testUnit.keyCountB}|${testUnit.assertionCardinal}|${testUnit.response.key}|${testUnit.response.valueString}|${testUnit.response.falseString}`
}

// ø TEST_COLLECTION_REPORT_COLLECTOR ¡¡¡EMPTY!!! ≈X≈
function testCollectionReportCollector(testCollection = [], displayParamObject = {}) {
    // console.warn(`≈606≈ testCollectionCollector: [array of objects below]`)
    // console.dir(testCollection)

    // for (let index = 0; index < testCollection.length; index++) {
    //     const testUnit = testCollection[index];
    //     // console.warn(`testUnit = testCollection[${index}]`)
    //     // testUnit.notes.push(`ITERATING const testUnit[${index}]`)
    //     // byTestUnitObjectAObjectB(objectA, objectB, testUnit)
    //     // console.warn(`${testUnit.response.key}: ${testUnit.response.valueString}`)
    //     if (testUnit.response.passBoolean) {
    //         // console.warn(`${index + 1}. ${testUnit.response.key}: ${testUnit.response.valueString}`)
    //         // testUnit.reportLine = `${index + 1}. ${testUnit.response.key}: ${testUnit.response.valueString}`
    //         // testUnit.reportRow = `${index + 1}|${testUnit.response.key}|${testUnit.response.valueString}|`
    //     } else {
    //         // console.warn(`${index + 1}. ${testUnit.response.key}: ${testUnit.response.valueString} => ${displayParamObject.passFalseString}`)
    //         // testUnit.reportLine = `${index + 1}. ${testUnit.response.key}: ${testUnit.response.valueString} => ${displayParamObject.passFalseString}`
    //         // testUnit.reportRow = `${index + 1}|${testUnit.response.key}|${testUnit.response.valueString}|${displayParamObject.passFalseString}`
    //     }

    // }

}

// ø TEST_COLLECTION_REPORT_ROW_PREP
async function testCollectionReportRowPrep(testCollection = [], displayParamObject = {}) {
            for (let index = 0; index < testCollection.length; index++) {
                const element = testCollection[index];
                // ø TEST_COLLECTION_REPORT_ROW_DISPLAY ¡CALL!
                await composeReportRowDisplay(element)
        }
}
// ø TEST_COLLECTION_REPORT_STRING_PREP
async function testCollectionReportStringPrep(testCollection = [], displayParamObject = {}) {
            let maxColCount = 0
            for (let index = 0; index < testCollection.length; index++) {
                const element = testCollection[index];
                // ø TEST_COLLECTION_REPORT_STRING_DISPLAY ¡CALL!
                displayParamObject.columnMaxLengthArray = []
                await composeReportStringDisplay(element)
                maxColCount = maxColCount > element.reportStringColCount ? maxColCount : element.reportStringColCount
                displayParamObject.maxColCount = maxColCount
        }
}
// ø TEST_COLLECTION_REPORT_PADDING_PREP
async function testCollectionReportPaddingPrep(testCollection = [], displayParamObject = {}) {
            let paddingAppicableForAssertionArray = displayParamObject.paddingAppicableForAssertionArray == null ? [] : displayParamObject.paddingAppicableForAssertionArray
            let maxColCount = displayParamObject.maxColCount
            let maxColPaddingArray = []
            let columnAlignmentArray = []
            for (let indexInit = 0; indexInit < maxColCount; indexInit++) {
                maxColPaddingArray[indexInit] = 0;
                columnAlignmentArray[indexInit] = 'RIGHT';
            }
            for (let indexUnit = 0; indexUnit < testCollection.length; indexUnit++) {
                const testUnit = testCollection[indexUnit];
                if(paddingAppicableForAssertionArray.includes(testUnit.assertion)){
                    let stringArray = testUnit.reportStringDisplay.split('|')
                    for (let indexColCount = 0; indexColCount < testUnit.reportStringColCount; indexColCount++) {
                        maxColPaddingArray[indexColCount] = maxColPaddingArray[indexColCount] > stringArray[indexColCount].length ? maxColPaddingArray[indexColCount] : stringArray[indexColCount].length
                    }
                }
                // // ø TEST_COLLECTION_REPORT_STRING_DISPLAY ¡CALL!
                // displayParamObject.columnMaxLengthArray = []
                // await composeReportStringDisplay(element)
                // maxColCount = maxColCount > element.reportStringColCount ? maxColCount : element.reportStringColCount
                // displayParamObject.maxColCount = maxColCount
        }
        displayParamObject.maxColPaddingArray = maxColPaddingArray
        displayParamObject.columnAlignmentArray = columnAlignmentArray
        /*
        */
}

// ø TEST_COLLECTION_REPORT_DISPLAY
async function testCollectionReportDisplay(testCollection = [], displayParamObject = {}) {
    console.warn(`≈782≈!≈ ENTERING: testCollectionReportDisplay: [rebuild in progress]`)
    let squaredPadding = []
    let index = 0
    for (const maxColPadding of displayParamObject.maxColPaddingArray) {
        squaredPadding[index] = maxColPadding * maxColPadding 
        index++
    }
    displayParamObject.squaredPadding = squaredPadding
    let paddingAppicableForAssertionArray = displayParamObject.paddingAppicableForAssertionArray == null ? [] : displayParamObject.paddingAppicableForAssertionArray
    console.warn(`paddingAppicableForAssertionArray: [${paddingAppicableForAssertionArray}]`)
    return
    // console.dir(testCollection)
    const doClearNotes = true
    if (doClearNotes) {
        testCollection.forEach(element => {
            delete element.notes
        });
    }
    
    let superIndex = 0
    let displayIndex = 0
    const alphaFiftyTwoArrayPipedString = 'ø,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,al,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az'
    const alphaUpperCardinalFiftyTwoArray = alphaFiftyTwoArrayPipedString.toUpperCase().split(',')
    const alphaLowerCardinalFiftyTwoArray = alphaFiftyTwoArrayPipedString.split(',')
    // console.warn(`alphaUpperCardinalFiftyTwoArray[0]: ${alphaUpperCardinalFiftyTwoArray[0]}`)
    // console.warn(`alphaLowerCardinalFiftyTwoArray[26]: ${alphaLowerCardinalFiftyTwoArray[26]}`)
    // console.warn(`alphaUpperCardinalFiftyTwoArray[27]: ${alphaUpperCardinalFiftyTwoArray[27]}`)
    // console.warn(`alphaLowerCardinalFiftyTwoArray[52]: ${alphaLowerCardinalFiftyTwoArray[52]}`)
    // console.warn(`alphaLowerCardinalFiftyTwoArray[53]: ${alphaLowerCardinalFiftyTwoArray[53]}`)
    // console.warn(`alphaLowerCardinalFiftyTwoArray[54]: ${alphaLowerCardinalFiftyTwoArray[54]}`)
    console.warn(`\n\nTitle:${displayParamObject.title}\n======`)
    console.warn(`\nSub-Title:${displayParamObject.subTitle}\n======`)
    let reportOrderarray = /*DEFAULT*/['headerBlock', 'subHeaderBlock', 'incrementBlock', 'matchBlock', 'reportBlock', 'footerBlock']
    reportOrderarray = typeof displayParamObject.reportOrderarray === 'object' && Array.isArray(displayParamObject.reportOrderarray) ? displayParamObject.reportOrderarray : reportOrderarray
    let headerBlock = ''
    let subHeaderBlock = ''
    let incrementBlock = ''
    let matchBlock = ''
    let reportBlock = ''
    let footerBlock = ''
    let headerBuffer = '===================================================================================================='
    let headerBlockHeader = ''
    headerBlockHeader = headerBlockHeader + '\n'+ headerBuffer.substr(0,headerBlockHeader.length) +'\n'
    let subHeaderBlockHeader = 'SUBHEADER: some useful identifying attributes'
    subHeaderBlockHeader = subHeaderBlockHeader + '\n'+ headerBuffer.substr(0,subHeaderBlockHeader.length) +'\n'
    let incrementBlockHeader = 'InCrEmEnT'
    incrementBlockHeader = incrementBlockHeader + '\n'+ headerBuffer.substr(0,incrementBlockHeader.length) +'\n'
    let matchBlockHeader = 'MaTcH'
    matchBlockHeader = matchBlockHeader + '\n'+ headerBuffer.substr(0,matchBlockHeader.length) +'\n'
    let reportBlockHeader = 'RePoRt'
    reportBlockHeader = reportBlockHeader + '\n'+ headerBuffer.substr(0,reportBlockHeader.length) +'\n'
    let footerBlockHeader = 'FoOtEr'
    footerBlockHeader = footerBlockHeader + '\n'+ headerBuffer.substr(0,footerBlockHeader.length) +'\n'
    // let headerBlockCardinal = 1
    // let subHeaderBlockCardinal = 1
    // let incrementBlockCardinal = 1
    // let matchBlockCardinal = 1
    // let reportBlockCardinal = 1
    // let footerBlockCardinal = 1
    let rowCount = 0
    testCollection.forEach(element => {
        rowCount++
        // if(element.assertion === 'HEADER'){headerBlock += element.reportRowDisplay + '\n'}
        if(element.assertion === 'HEADER'){headerBlock += composeReportRowDisplay(element) + '\n'}
        // if(element.assertion === 'SUBHEADER'){subHeaderBlock += composeReportStringDisplay(element) + '; '}
        if(element.assertion === 'SUBHEADER'){subHeaderBlock += composeReportRowDisplay(element) + '; '}
        // let subHeaderBlock = ''
        // if(element.assertion === 'INCREMENT'){incrementBlock += composeReportStringDisplay(element) + '\n'}
        if(element.assertion === 'INCREMENT'){incrementBlock += composeReportRowDisplay(element) + '\n'}
        // let incrementBlock = ''
        // if(element.assertion === 'MATCH'){matchBlock += composeReportStringDisplay(element) + '\n'}
        if(element.assertion === 'MATCH'){matchBlock += composeReportRowDisplay(element) + '\n'}
        // let matchBlock = ''
        // if(element.assertion === 'REPORT'){reportBlock += composeReportStringDisplay(element) + '\n'}
        if(element.assertion === 'REPORT'){reportBlock += composeReportRowDisplay(element) + '\n'}
        // let reportBlock = ''
        // if(element.assertion === 'FOOTER'){footerBlock += composeReportStringDisplay(element) + '\n'}
        if(element.assertion === 'FOOTER'){footerBlock += composeReportRowDisplay(element) + '\n'}
        // let footerBlock = ''
        // console.warn('=> ' + element.reportLine + '<=')
        // console.warn(`${rowCount} ≈X≈ `+ element.reportRow)
    });
    
    console.warn(`total rows: ${testCollection.length}`)
    if(headerBlock.length > 0){headerBlock = headerBlockHeader + headerBlock}
    console.warn(`${headerBlock}`)
    if(subHeaderBlock.length > 0){subHeaderBlock = subHeaderBlockHeader + subHeaderBlock + '\n'}
    console.warn(`${subHeaderBlock}`)
    if(incrementBlock.length > 0){incrementBlock = incrementBlockHeader + incrementBlock}
    console.warn(`${incrementBlock}`)
    if(matchBlock.length > 0){matchBlock = matchBlockHeader + matchBlock}
    console.warn(`${matchBlock}`)
    if(reportBlock.length > 0){reportBlock = reportBlockHeader + reportBlock}
    console.warn(`${reportBlock}`)
    if(footerBlock.length > 0){footerBlock = footerBlockHeader + footerBlock}
    console.warn(`${footerBlock}`)
    // console.warn(JSON.stringify(testCollection))
    // console.warn(JSON.stringify(testCollection))
    console.warn(`Force return`)
    console.warn(`↪from testCollectionReportDisplay`)
    return
    
    
    console.warn(`\n\nHEADER:pending\n======`)
    console.warn(`\nSUB-HEADER:pending\n======`)
    console.warn(`\n=======\nFooter:`)
}
// ø TEST_COLLECTION_REPORT_ROW_DISPLAY
function composeReportRowDisplay(element = {}){
    // console.warn(`≈850≈§≈ paramObject: [object below]`)
    // console.dir(paramObject)
    let reportRowArray = element.reportRow.split('|')
    if(reportRowArray[0] === 'HEADER'){
        element.reportRowDisplay = `${reportRowArray[5]}`
        return
        // return element.reportRowDisplay
        // return `${headerBuffer.substr(0,reportRowArray[5].length + 10)}\n==== ${reportRowArray[5]} ====\n${headerBuffer.substr(0,reportRowArray[5].length + 10)}`
    }
    if(reportRowArray[0] === 'SUBHEADER'){
        element.reportRowDisplay = `${reportRowArray[4]}|${reportRowArray[5]}` 
        return
        // return element.reportRowDisplay
        // return `${reportRowArray[4]}:${reportRowArray[5]}`
    }
    if(reportRowArray[0] === 'MATCH'){
        let falseStringThis = reportRowArray[1] * reportRowArray[2] === 0 ? 'EMPTY OBJECT' : 'NO_MATCH'
        let values = reportRowArray[5].split('=') 
        element.reportRowDisplay = `${reportRowArray[4]}|${values[0]}=${values[1]}|${falseStringThis}` 
        return
        // return element.reportRowDisplay
        // return `${reportRowArray[4]}: ${values[0]} === ${values[1]} [${falseStringThis}]`
    }
    if(reportRowArray[0] === 'INCREMENT'){
        let falseStringThis = reportRowArray[1] * reportRowArray[2] === 0 ? 'EMPTY_OBJECT' : 'INVALID_INCREMENT'
        let values = reportRowArray[5].split('=') 
        element.reportRowDisplay = `${reportRowArray[4]}|${values[0]}=${values[1]}|${falseStringThis}` 
        return
        // return element.reportRowDisplay
        // return `${reportRowArray[4]}: ${values[0]} === ${values[1]} [${falseStringThis}]`
    }
    element.reportRowDisplay = `${reportRowArray}|REPORT_ROW_DISPLAY_UNSUPPORTED` 
    // return element.reportRowDisplay
    // return '†' + element.reportRow
}

// ø TEST_COLLECTION_REPORT_STRING_DISPLAY
function composeReportStringDisplay(element = {}){
    // console.warn(`≈888≈§≈ paramObject: [object below]`)
    // console.dir(paramObject)
    let reportRowDisplayArray = element.reportRowDisplay.split('|')
    let eqBuffer = '===================================================================================================='
    if(element.assertion === 'HEADER'){
        element.reportStringDisplay = `${eqBuffer.substr(0,reportRowDisplayArray[0].length + 10)}\n==== ${reportRowDisplayArray[0]} ====\n${eqBuffer.substr(0,reportRowDisplayArray[0].length + 10)}`
        element.reportStringColCount = 1
        return
    }
    if(element.assertion === 'SUBHEADER'){
        element.reportStringDisplay = `${reportRowDisplayArray[0]}|${reportRowDisplayArray[1]}` 
        element.reportStringColCount = 2
        return
    }
    if(element.assertion === 'MATCH'){
        let values = reportRowDisplayArray[1].split('=') 
        if(reportRowDisplayArray[2] === 'EMPTY_OBJECT'){
            element.reportStringDisplay = `${reportRowDisplayArray[0]}|${values[0]}|${values[1]}|` 
            element.reportStringColCount = 4
            return
        }
        element.reportStringDisplay = `${reportRowDisplayArray[0]}|${values[0]}|${values[1]}|${reportRowDisplayArray[2]}` 
        element.reportStringColCount = 4
        return
    }
    if(element.assertion === 'INCREMENT'){
        let values = reportRowDisplayArray[1].split('=') 
        if(reportRowDisplayArray[2] === 'EMPTY_OBJECT'){
            element.reportStringDisplay = `${reportRowDisplayArray[0]}|${values[0]}|${values[1]}|` 
            element.reportStringColCount = 4
            return
        }
        element.reportStringDisplay = `${reportRowDisplayArray[0]}|${values[0]}|${values[1]}|reportRowDisplayArray[2]` 
        element.reportStringColCount = 4
        return
    }
    element.reportStringDisplay = `${element.reportRowDisplay}|REPORT_STRING_DISPLAY_UNSUPPORTED` 
    element.reportStringColCount = 9
}
