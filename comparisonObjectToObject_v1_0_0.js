let preTrash = `
// responseObject.notes = ['first responseObject note']
// responseObject.logArray = []
// let logThis = {}
// logThis.notes = ['first logThis note']
// logThis.key = 'sectionCount'
// logThis.log = '$_{drupalRecord.sectionCount}=>$_{wixRecord.sectionCount}'
// let testUnit = {}
// testUnit.notes = ['first testUnit note']
// testUnit.key = 'sectionCount'
// testUnit.assert = 'MATCH'
// testUnit.valueArray = []
// testUnit.valueArray.push(drupalRecord[unitTest.key])
// testUnit.valueArray.push(wixRecord[unitTest.key])
// logThis.testUnit = testUnit
`;
let DOX = `
function compareDrupalWix(drupal,wix){
	let testCollection = []
	let testUnitThis = {}
	testUnitThis.key = 'termId'
	testUnitThis.assertion = 'MATCH'
	testCollection.push(testUnitThis)
	testUnitThis = {}
	testUnitThis.key = ['courseRegionKey','regionKey']//A,B respectively
	testUnitThis.assertion = 'MATCH'
	testCollection.push(testUnitThis)

	//... instantiate element(s)
	compareTwoObjects(objectA, objectB, testCollection)
}

function compareTwoObjects(objectA = {}, objectB = {}, testCollection = []){
	foreach(testCollection){
		testUnit = testCollection[index]
		unitTestCompareTwoObjects(objectA,ObjectB,testUnit)
	}
}

function unitCompareTwoObjects(objectA = {},ObjectB = {},testUnit = {}){
    switch (testUnit.assert.toUpperCase()) {
        case 'MATCH':
            comparisonMatch(objectA,ObjectB,testUnit)
            break;
            
        default:
            testUnit.response.passBoolean = false
            testUnit.response.failString = 'unsupported assertion'
            testUnit.response.failCode = '!supportedAssertionArray.includes(testUnit.assert)'
            break;
    }
}
function comparisonMatch(objectA = {},ObjectB = {},testUnit = {}){
	
}
`
// any variable named `somethingString` CAN be PIPED
// ↪ `somethingString.split('|')`
// ↪ if necessary, but default is no pipes
// ↪ dream up some row structure of the `somethingString` if you like
// testUnit.code if prefixed with '≈' is 'pseudo-code' not actual code => usefule when too long
// ø TEST_COLLECTION_displayPrePstWix_CALL
// displayPrePstWix(wixCoursePRE,wixCoursePST)
// ø ---
// displayPrePstDrupal(drupalCoursePRE,drupalCoursePST)
// displayDrupalWixPre(drupalCoursePRE,wixCoursePRE)
// ø TEST_COLLECTION_displayDrupalWixPst_CALL
// displayDrupalWixPst(drupalCoursePST,wixCoursePST)
// ø ---
// ! <SUPER IMPORT>
// import superObject from superObjectPath
// import superObject from "./2008PRE_superObject.json"
// pathOLD: /Users/brad/Documents/bradRepositories/vsCode/btlBestPracticesLocal/btlBestPractices/logs/2008PRE_superObject.json
// pathNEW: /Users/brad/Documents/bradRepositories/vsCode/btlBestPracticesLocal/btlBestPractices/logs/2008PRE_superObject_3607.json
// import superObject from "./2008PRE_superObject_3607.json"
import superObject from "/Users/brad/Documents/bradRepositories/vsCode/btlBestPracticesLocal/btlBestPractices/logs/2008PRE_superObject_3607.json"
// path: /Users/brad/Documents/bradRepositories/vsCode/btlBestPracticesLocal/btlBestPractices/logs/2008PRE_superObject_3607.json
// ! </SUPER IMPORT>

//path: /Users/brad/Documents/bradRepositories/vsCode/steamdaWixLocal/steamdaWix/courseCatalog_WiX/courseEnrollmentState/logs/2008PRE_superObject.json
// import drupalCoursePRE from "./2008PRE_drupalCourse.json";
let drupalCoursePRE = superObject.drupalPRE
//path: /Users/brad/Documents/bradRepositories/vsCode/steamdaWixLocal/steamdaWix/courseCatalog_WiX/courseEnrollmentState/logs/2008PRE_drupalCourse.json
// import wixCoursePRE from "./2008PRE_wixCourse.json";
let wixCoursePRE = superObject.wixPRE
//path: /Users/brad/Documents/bradRepositories/vsCode/steamdaWixLocal/steamdaWix/courseCatalog_WiX/courseEnrollmentState/logs/2008PRE_wixCourse.json
// import drupalCoursePST from "./2008PST_drupalCourse.json";
let drupalCoursePST = superObject.drupalPST
//path: /Users/brad/Documents/bradRepositories/vsCode/steamdaWixLocal/steamdaWix/courseCatalog_WiX/courseEnrollmentState/logs/2008PST_drupalCourse.json
// import wixCoursePST from "./2008PST_wixCourse.json";
let wixCoursePST = superObject.wixPST
//path: /Users/brad/Documents/bradRepositories/vsCode/steamdaWixLocal/steamdaWix/courseCatalog_WiX/courseEnrollmentState/logs/2008PST_wixCourse.json
import objectKeysObject from "/Users/brad/Documents/bradRepositories/vsCode/btlBestPracticesLocal/btlBestPractices/logs/2008DEVEL_objectKeysObject.json";
//pathOLD: /Users/brad/Documents/bradRepositories/vsCode/steamdaWixLocal/steamdaWix/courseCatalog_WiX/courseEnrollmentState/logs/2008DEVEL_objectKeysObject.json
//pathNEW: /Users/brad/Documents/bradRepositories/vsCode/btlBestPracticesLocal/btlBestPractices/logs/2008DEVEL_objectKeysObject.json
console.log(`objectKeysObject: [object below]`)
console.dir(objectKeysObject)
// console.log(`Object.keys(objectKeysObject): [object below]`)
// console.dir(Object.keys(objectKeysObject))
// console.log(`objectKeysObject.wixADJUST: [object below]`)
// console.dir(objectKeysObject.wixADJUST)

// ø TEST_COLLECTION_MANUAL_PARAMS
// console.warn('drupalCoursePRE: [object below]')
// console.dir(drupalCoursePRE)
// console.warn('wixCoursePRE: [object below]')
// console.dir(wixCoursePRE)
// console.warn('drupalCoursePST: [object below]')
// console.dir(drupalCoursePST)
// console.warn('wixCoursePST: [object below]')
// console.dir(wixCoursePST)
// console.warn('objectKeysObject: [object below]')
// console.dir(objectKeysObject)
// console.warn(`objectKeysObject.both: [${objectKeysObject.both}]`)
// console.warn(`objectKeysObject.wix: [${objectKeysObject.wix}]`)
// console.warn(`objectKeysObject.drupal: [${objectKeysObject.drupal}]`)

// ø TEST_COLLECTION_displayPrePstWix_FUNCT
function displayPrePstWix(preWixRecord = {}, pstWixRecord = {}, paramObject = {}) {
    console.warn('Logic to Robustly Display the progress of the Wix Record PRE-Test to PST-Test')
    // displayWixRecordData(preWixRecord, '\npreWixRecord\n============')
    // displayWixRecordData(pstWixRecord, '\npstWixRecord\n============')
    // console.warn(`\nobjectKeysObject.wix: \n[${objectKeysObject.wix}]`)
    // console.warn(`\nobjectKeysObject.both: \n[${objectKeysObject.both}]`)
    // ø TEST_COLLECTION_comparisonWixToWixRecords_CALL
    let response = comparisonWixToWixRecords(preWixRecord, pstWixRecord, paramObject)
    // console.warn(`Force return`)
    // console.warn(`↪from displayPrePstWix`)
    // return

    // let response = comparisonDrupalToWixRecords(pstDrupalRecord, pstWixRecord)
    let title = ''
    let subTitle = ''
    let report = testCollectionReport(response.testCollection, paramObject.displayParamObject)
    // console.log(JSON.stringify(response,undefined,4))
}
function displayPrePstDrupal(preDrupalRecord = {}, pstDrupalRecord = {}) {
    console.warn('Logic to Robustly Display the progress of the Drupal Record PRE-Test to PST-Test')
    displayDrupalRecordData(preDrupalRecord, '\npreDrupalRecord\n===============')
    displayDrupalRecordData(pstDrupalRecord, '\npstDrupalRecord\n===============')
    console.warn(`\nobjectKeysObject.drupal: \n[${objectKeysObject.drupal}]`)
    console.warn(`\nobjectKeysObject.both: \n[${objectKeysObject.both}]`)
}
function displayDrupalWixPre(preDrupalRecord = {}, preWixRecord = {}) {
    console.warn('Logic to Robustly Display the comparison of the PRE-Test state of Drupal Record and the Wix Record')
    displayDrupalRecordData(preDrupalRecord, '\npreDrupalRecord\n===============')
    displayWixRecordData(preWixRecord, '\npreWixRecord\n============')
    console.warn(`\nobjectKeysObject.drupal: \n[${objectKeysObject.drupal}]`)
    console.warn(`\nobjectKeysObject.wix: \n[${objectKeysObject.wix}]`)
    console.warn(`\nobjectKeysObject.both: [${objectKeysObject.both}]`)
}
// ø <TESTING>
let paramObject = {}
// ø TEST_COLLECTION_MANUAL_PARAMS
// ø ---
// ø TEST_COLLECTION_displayDrupalWixPst_CALL
// displayDrupalWixPst(drupalCoursePST, wixCoursePST)
// ø TEST_COLLECTION_displayDrupalWixPst_FUNCT
// ø TEST_COLLECTION_comparisonDrupalToWixRecords_CALL
// ø TEST_COLLECTION_DRP_WIX_MAIN
// ø ---
// ø TEST_COLLECTION_displayPrePstWix_CALL
paramObject.contentParamObject = {}
paramObject.contentParamObject.testKind = 'ADJUST'
paramObject.displayParamObject = {}
paramObject.displayParamObject.title = 'Title by Param'
paramObject.displayParamObject.subTitle = 'Sub-Title by Param'
paramObject.displayParamObject.passFalseString = 'SEKIY'
let testKindThis= 'ADJUST'
// let testKindThis= 'ENROLL'
displayPrePstWix(wixCoursePRE,wixCoursePST,paramObject)
// ø TEST_COLLECTION_displayPrePstWix_FUNCT
// ø TEST_COLLECTION_comparisonWixToWixRecords_CALL
// ø TEST_COLLECTION_WIX_WIX_MAIN
// ø ---
// ø TEST_COLLECTION_AB_COLLECTION
// ø TEST_COLLECTION_AB_COLLECTION_UNIT_ARRAY_APPEND_MATCH
// ø TEST_COLLECTION_AB_UNIT
// ø TEST_COLLECTION_AB_MATCH_UNIT
// ø TEST_COLLECTION_REPORT
// ø </TESTING>
// ø TEST_COLLECTION_displayDrupalWixPst_FUNCT
function displayDrupalWixPst(pstDrupalRecord = {}, pstWixRecord = {}) {
    console.warn('Logic to Robustly Display the comparison of the PST-Test state of Drupal Record and the Wix Record')
    // displayDrupalRecordData(preDrupalRecord, '\npreDrupalRecord\n===============')
    // displayWixRecordData(pstWixRecord, '\npreWixRecord\n============')
    // console.warn(`Force return`)
    // return
    // console.warn(`pstWixRecord.regionKey: ${pstWixRecord.regionKey}`)
    // ø TEST_COLLECTION_comparisonDrupalToWixRecords_CALL
    let response = comparisonDrupalToWixRecords(pstDrupalRecord, pstWixRecord)
    // console.warn(`Force return`)
    // console.warn(`↪ from displayDrupalWixPst`)
    // return
    let title = ''
    let subTitle = ''
    let report = testCollectionReport(response.testCollection,title,subTitle)
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
function comparisonDrupalToWixRecords(drupalRecord = {}, wixRecord = {}) {
    console.warn(`wixRecord.regionKey: ${wixRecord.regionKey}`)
    let responseObject = {}
    console.warn(`ENTERING comparisonDrupalToWixRecords(drupalRecord, wixRecord)`)
    // console.warn(`Force return`)
    // return
    let testCollection = []//that is DrupalToWix tests
    // const matchKeyArray = ['_id','courseKey','sectionCount','enrollExcptn','courseOptions','min']
    // const matchKeyArray = ['_id','courseKey','sectionCount','enrollExcptn','courseOptions']
    const keyArray = ['_id','courseKey','sectionCount','enrollExcptn','courseOptions',['NNULL','min']]
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
    // ø <UnitTest>
    // testUnitThis = {}
    // testUnitThis.assertion = 'MATCH'
    // testUnitThis.notes = ['testUnit initial note']
    // testUnitThis.key = 'courseKey'
    // testCollection.push(testUnitThis)
    // ø </UnitTest>
    // ø <UnitTest>
    // testUnitThis = {}
    // testUnitThis.assertion = 'MATCH'
    // testUnitThis.notes = ['testUnit initial note']
    // testUnitThis.key = 'sectionCount'
    // testCollection.push(testUnitThis)
    // ø </UnitTest>
    // ø <UnitTest>
    // testUnitThis = {}
    // testUnitThis.assertion = 'MATCH'
    // testUnitThis.notes = ['testUnit initial note']
    // testUnitThis.key = 'enrollExcptn'
    // testCollection.push(testUnitThis)
    // ø </UnitTest>
    // ø <UnitTest>
    // testUnitThis = {}
    // testUnitThis.assertion = 'MATCH'
    // testUnitThis.notes = ['testUnit initial note']
    // testUnitThis.key = 'courseOptions'
    // testCollection.push(testUnitThis)
    // ø </UnitTest>
    // ø <UnitTest>
    // testUnitThis = {}
    // testUnitThis.assertion = 'MATCH'
    // testUnitThis.notes = ['testUnit initial note']
    // testUnitThis.key = ['NNULL','min']
    // testCollection.push(testUnitThis)
    // ø </UnitTest>
    console.warn(`testCollection: [array of objects below]`)
    console.dir(testCollection)
    // console.warn(`Force return`)
    // console.warn(`↪from comparisonDrupalToWixRecords testCollection MANUAL`)
    // return
    byTestCollectionObjectAObjectB(drupalRecord, wixRecord, testCollection)
    responseObject.testCollection = testCollection
    return responseObject
}
// ø TEST_COLLECTION_WIX_WIX_MAIN
function comparisonWixToWixRecords(wixRecordA = {}, wixRecordB = {}, paramObject = {}){
    let testKind = paramObject.contentParamObject.testKind
    const supportedTestKindArray = ['ADJUST','ENROLL']
    if(!supportedTestKindArray.includes(testKind)){
        let responseObjectKludge = {"error":"!supportedTestKindArray.includes(testKind)"}
        console.warn('responseObjectKludge: [error object below]')
        console.dir(responseObjectKludge)
        console.warn(`Force return`)
        console.warn(`↪from comparisonWixToWixRecords => ERROR`)
        return
    }
    let responseObject = {}
    let testCollection = []//that is WixAToWixB tests

    let wixEnrollKeyArrayObject = {}
    if(testKind === 'ADJUST'){
        wixEnrollKeyArrayObject = objectKeysObject.wixADJUST
    }
    if(testKind === 'ENROLL'){
        wixEnrollKeyArrayObject = objectKeysObject.wixENROLL
    }
    const keyArrayKeyArray = [ 'INCREMENT', 'MATCH', 'REPORT', 'HEADER', 'SUBHEADER' ]
    // console.warn(`wixEnrollKeyArrayObject: [object below]`)
    // console.dir(wixEnrollKeyArrayObject)
    // console.warn(`wixEnrollKeyArrayObject: [array below]`)
    // console.dir(Object.keys(wixEnrollKeyArrayObject))
    console.warn(`wixEnrollKeyArrayObject.MATCH: [object below]`)
    console.dir(wixEnrollKeyArrayObject.MATCH)
    let assertion = 'MATCH'
    testCollectionAppend(testCollection, assertion, wixEnrollKeyArrayObject.MATCH)
    // console.warn(`testCollection: [array of objects below]`)
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

    byTestCollectionObjectAObjectB(wixRecordA, wixRecordB, testCollection)
    responseObject.testCollection = testCollection
    return responseObject
}
// ø TEST_COLLECTION_AB_COLLECTION
function byTestCollectionObjectAObjectB(objectA = {}, objectB = {}, testCollection = []) {
    console.warn(`objectB.regionKey: ${objectB.regionKey}`)
    // let responseObject = {}
    console.warn(`ENTERING byTestCollectionObjectAObjectB(objectA, objectB, testCollection)`)
    // console.warn(`Force return`)
    // console.warn(`from byTestCollectionObjectAObjectB`)
    // return
    for (let index = 0; index < testCollection.length; index++) {
        const testUnit = testCollection[index];
        testUnit.notes.push(`ITERATING const testUnit[${index}]`)
        byTestUnitObjectAObjectB(objectA, objectB, testUnit)
    }

}
// ø TEST_COLLECTION_AB_UNIT
function byTestUnitObjectAObjectB(objectA = {}, objectB = {}, testUnit = {}) {
    //PASS_THRU
    console.warn(`ENTERING byTestCollectionObjectAObjectB(objectA, objectB, testUnit)`)
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

        default:
            testUnit.response.passBoolean = false
            testUnit.response.failString = 'unsupported assertion'
            testUnit.response.failCode = `switch (testUnit.assertion)|default:`
            break;
    }
}

// ø TEST_COLLECTION_AB_COLLECTION_UNIT_ARRAY_APPEND_MATCH
function testCollectionAppend(testCollection = [], assertion = 'OTHER', matchKeyArray = []) {
    for (let index = 0; index < matchKeyArray.length; index++) {
        const matchKey = matchKeyArray[index];
        
        // ø <UnitTest>
        let testUnitThis = {}
        testUnitThis = {}
        testUnitThis.assertion = assertion.toUpperCase()
        testUnitThis.notes = [`${matchKey}: testUnit initial note`]
        testUnitThis.key = matchKey
        testCollection.push(testUnitThis)
        // ø </UnitTest>
    }

}
// ø TEST_COLLECTION_AB_MATCH_UNIT
function testMatch(objectA = {}, objectB = {}, testUnit = {}) {
    console.warn(`ENTERING testMatch(objectA, objectB, testUnit)`)
    // console.warn(`Force return`)
    // return
    testUnit.response.key = ''
    testUnit.response.valueString = ''
    testUnit.notes.push('ENTERING testMatch [of comparisonTest]')
    let testUnitKeyIsValid = typeof testUnit.key === 'object' && Array.isArray(testUnit.key) ? true : false
    testUnitKeyIsValid = typeof testUnit.key === 'string' ? true : testUnitKeyIsValid
    if (!testUnitKeyIsValid) {
        testUnit.response.passBoolean = false
        testUnit.response.failString = 'testUnit.key is InValid'
        testUnit.response.failCode = `≈ neither array nor string`
        testUnit.response.key = 'UNKNOWN'
        testUnit.response.valueString = testUnit.response.failCode
        return
    }
    let keyA = typeof testUnit.key === 'string' ? testUnit.key : testUnit.key[0] 
    let keyB = typeof testUnit.key === 'string' ? testUnit.key : testUnit.key[1] 
    testUnit.notes.push(`keyA: ${keyA} ; keyB: ${keyB} ; `)
    testUnit.response.key = typeof testUnit.key === 'string' ? keyA : `${keyA}•${keyB}`
    // testUnit.response.valueString = keyA === 'NNULL' ? `NA | ${objectB[keyB]}` : testUnit.response.valueString
    // testUnit.response.valueString = keyB === 'NNULL' ? `${objectA[keyA]} | NA` : testUnit.response.valueString
    let valueArray = []
    let valueThis = typeof objectA[keyA] === 'undefined' ? 'NA' : objectA[keyA].toString()
    valueArray.push(valueThis)
    valueThis = typeof objectB[keyB] === 'undefined' ? 'NA' : objectB[keyB].toString()
    valueArray.push(valueThis)
    // valueArray.push(objectB[keyB].toString())
    testUnit.response.valueString = valueArray.join(' | ')
    testUnit.notes.push(`valueArray: [${valueArray}]`)
    testUnit.valueArray = valueArray
    testUnit.notes.push('testUnitKeyIsValid: testUnit.key [array or string]')
    if (testUnit.valueArray.length < 2) {
        testUnit.response.passBoolean = false
        testUnit.response.failString = 'insufficient values to compare'
        testUnit.response.failCode = `testUnit.valueArray.length < 2`
        return
    }
    testUnit.notes.push('testUnit.valueArray => has two or more elements')
    const singletonByMatch = Array.from(new Set(testUnit.valueArray))
    if (singletonByMatch.length > 1) {
    // if (singletonByMatch.length > 2 || (singletonByMatch.length === 1 && singletonByMatch.includes('NA'))) {
        testUnit.response.passBoolean = false
        testUnit.response.failString = 'Set from Array of values contains more than one element'
        testUnit.response.failCode = `singletonByMatch.length > 2 || (singletonByMatch.length === 1 && singletonByMatch.includes('NA'))`
        return
    }
    testUnit.notes.push('singletonByMatch => has exactly one element')

}

// ø TEST_COLLECTION_REPORT
function testCollectionReport(testCollection = [],displayParamObject = {}){
    console.warn(`\n\nTitle:${displayParamObject.title}\n======`)
    console.warn(`\nSub-Title:${displayParamObject.subTitle}\n======`)
    for (let index = 0; index < testCollection.length; index++) {
        const testUnit = testCollection[index];
        // console.warn(`testUnit = testCollection[${index}]`)
        // testUnit.notes.push(`ITERATING const testUnit[${index}]`)
        // byTestUnitObjectAObjectB(objectA, objectB, testUnit)
        // console.warn(`${testUnit.response.key}: ${testUnit.response.valueString}`)
        if(testUnit.response.passBoolean){
            console.warn(`${index+1}. ${testUnit.response.key}: ${testUnit.response.valueString}`)
        }else{
            console.warn(`${index+1}. ${testUnit.response.key}: ${testUnit.response.valueString} => ${displayParamObject.passFalseString} `)
        }
        
    }
    console.warn(`\n=======\nFooter:`)


}
