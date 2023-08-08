/************* 
 * Remt Test *
 *************/


// store info about the experiment session:
let expName = 'REMT';  // from the Builder filename that created this script
let expInfo = {
    'participant': `${util.pad(Number.parseFloat(util.randint(0, 999999)).toFixed(0), 6)}`,
    'session': '001',
};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: false,
  color: new util.Color([1.0, 1.0, 1.0]),
  units: 'height',
  waitBlanking: true
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(introRoutineBegin());
flowScheduler.add(introRoutineEachFrame());
flowScheduler.add(introRoutineEnd());
flowScheduler.add(practiceRoutineBegin());
flowScheduler.add(practiceRoutineEachFrame());
flowScheduler.add(practiceRoutineEnd());
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin(trialsLoopScheduler));
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'condresp.xlsx', 'path': 'condresp.xlsx'},
    {'name': 'eyes/image1.jpg', 'path': 'eyes/image1.jpg'},
    {'name': 'eyes/image2.jpg', 'path': 'eyes/image2.jpg'},
    {'name': 'eyes/image3.jpg', 'path': 'eyes/image3.jpg'},
    {'name': 'eyes/image4.jpg', 'path': 'eyes/image4.jpg'},
    {'name': 'eyes/image5.jpg', 'path': 'eyes/image5.jpg'},
    {'name': 'eyes/image6.jpg', 'path': 'eyes/image6.jpg'},
    {'name': 'eyes/image7.jpg', 'path': 'eyes/image7.jpg'},
    {'name': 'eyes/image8.jpg', 'path': 'eyes/image8.jpg'},
    {'name': 'eyes/image9.jpg', 'path': 'eyes/image9.jpg'},
    {'name': 'eyes/image10.jpg', 'path': 'eyes/image10.jpg'},
    {'name': 'eyes/image11.jpg', 'path': 'eyes/image11.jpg'},
    {'name': 'eyes/image12.jpg', 'path': 'eyes/image12.jpg'},
    {'name': 'eyes/image13.jpg', 'path': 'eyes/image13.jpg'},
    {'name': 'eyes/image14.jpg', 'path': 'eyes/image14.jpg'},
    {'name': 'eyes/image15.jpg', 'path': 'eyes/image15.jpg'},
    {'name': 'eyes/image16.jpg', 'path': 'eyes/image16.jpg'},
    {'name': 'eyes/image17.jpg', 'path': 'eyes/image17.jpg'},
    {'name': 'eyes/image18.jpg', 'path': 'eyes/image18.jpg'},
    {'name': 'eyes/image19.jpg', 'path': 'eyes/image19.jpg'},
    {'name': 'eyes/image20.jpg', 'path': 'eyes/image20.jpg'},
    {'name': 'eyes/image21.jpg', 'path': 'eyes/image21.jpg'},
    {'name': 'eyes/image22.jpg', 'path': 'eyes/image22.jpg'},
    {'name': 'eyes/image23.jpg', 'path': 'eyes/image23.jpg'},
    {'name': 'eyes/image24.jpg', 'path': 'eyes/image24.jpg'},
    {'name': 'eyes/image25.jpg', 'path': 'eyes/image25.jpg'},
    {'name': 'eyes/image26.jpg', 'path': 'eyes/image26.jpg'},
    {'name': 'eyes/image27.jpg', 'path': 'eyes/image27.jpg'},
    {'name': 'eyes/image28.jpg', 'path': 'eyes/image28.jpg'},
    {'name': 'eyes/image29.jpg', 'path': 'eyes/image29.jpg'},
    {'name': 'eyes/image30.jpg', 'path': 'eyes/image30.jpg'},
    {'name': 'eyes/image31.jpg', 'path': 'eyes/image31.jpg'},
    {'name': 'eyes/image32.jpg', 'path': 'eyes/image32.jpg'},
    {'name': 'eyes/image33.jpg', 'path': 'eyes/image33.jpg'},
    {'name': 'eyes/image34.jpg', 'path': 'eyes/image34.jpg'},
    {'name': 'eyes/image35.jpg', 'path': 'eyes/image35.jpg'},
    {'name': 'eyes/image36.jpg', 'path': 'eyes/image36.jpg'},
    {'name': 'practice.png', 'path': 'practice.png'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2023.1.0';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);


  return Scheduler.Event.NEXT;
}


var introClock;
var button;
var practiceClock;
var image_2;
var textd_2;
var text_2;
var key_resp;
var trialClock;
var image;
var mouse_click;
var texta;
var textb;
var textc;
var textd;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "intro"
  introClock = new util.Clock();
  button = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'button',
    text: 'Click anywhere to begin.',
    fillColor: [1.0, 1.0, 1.0],
    borderColor: null,
    color: [(- 1.0), (- 1.0), (- 1.0)],
    colorSpace: 'rgb',
    pos: [0, 0],
    letterHeight: 0.05,
    size: [0.5, 0.3],
    depth: 0
  });
  button.clock = new util.Clock();
  
  // Initialize components for Routine "practice"
  practiceClock = new util.Clock();
  image_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_2', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [0.7, 0.55],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  textd_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'textd_2',
    text: 'For each set of eyes, click the word that best describes what the person in the picture is thinking or feeling. You may feel that more than one word is applicable but please choose just one word, the word which you consider to be most suitable. Consider the example below.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.35], height: 0.025,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('grey'),  opacity: undefined,
    depth: -1.0 
  });
  
  text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: 'Before making your choice, make sure that you have read all 4 words. You should try to do the task as quickly as possible but you will not be timed. If you do not know what a word means you can look it up in the definition handout. When you are ready, press the space bar to begin.\n',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.35)], height: 0.025,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('grey'),  opacity: undefined,
    depth: -2.0 
  });
  
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trial"
  trialClock = new util.Clock();
  image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [0.7, 0.4],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : false, depth : 0.0 
  });
  mouse_click = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_click.mouseClock = new util.Clock();
  texta = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'texta',
    text: '',
    fillColor: 'white',
    borderColor: null,
    color: 'black',
    colorSpace: 'rgb',
    pos: [(- 0.3), 0.3],
    letterHeight: 0.03,
    size: [0.25, 0.05],
    depth: -2
  });
  texta.clock = new util.Clock();
  
  textb = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'textb',
    text: '',
    fillColor: 'white',
    borderColor: null,
    color: 'black',
    colorSpace: 'rgb',
    pos: [0.3, 0.3],
    letterHeight: 0.03,
    size: [0.25, 0.05],
    depth: -3
  });
  textb.clock = new util.Clock();
  
  textc = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'textc',
    text: '',
    fillColor: 'white',
    borderColor: null,
    color: 'black',
    colorSpace: 'rgb',
    pos: [(- 0.3), (- 0.3)],
    letterHeight: 0.03,
    size: [0.25, 0.05],
    depth: -4
  });
  textc.clock = new util.Clock();
  
  textd = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'textd',
    text: '',
    fillColor: 'white',
    borderColor: null,
    color: 'black',
    colorSpace: 'rgb',
    pos: [0.3, (- 0.3)],
    letterHeight: 0.03,
    size: [0.25, 0.05],
    depth: -5
  });
  textd.clock = new util.Clock();
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var introComponents;
function introRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'intro' ---
    t = 0;
    introClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // reset button to account for continued clicks & clear times on/off
    button.reset()
    // keep track of which components have finished
    introComponents = [];
    introComponents.push(button);
    
    introComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function introRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'intro' ---
    // get current time
    t = introClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *button* updates
    if (t >= 0 && button.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button.tStart = t;  // (not accounting for frame time here)
      button.frameNStart = frameN;  // exact frame index
      
      button.setAutoDraw(true);
    }

    if (button.status === PsychoJS.Status.STARTED) {
      // check whether button has been pressed
      if (button.isClicked) {
        if (!button.wasClicked) {
          // store time of first click
          button.timesOn.push(button.clock.getTime());
          button.numClicks += 1;
          // store time clicked until
          button.timesOff.push(button.clock.getTime());
        } else {
          // update time clicked until;
          button.timesOff[button.timesOff.length - 1] = button.clock.getTime();
        }
        if (!button.wasClicked) {
          // end routine when button is clicked
          continueRoutine = false;
        }
        // if button is still clicked next frame, it is not a new click
        button.wasClicked = true;
      } else {
        // if button is clicked next frame, it is a new click
        button.wasClicked = false;
      }
    } else {
      // keep clock at 0 if button hasn't started / has finished
      button.clock.reset();
      // if button is clicked next frame, it is a new click
      button.wasClicked = false;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    introComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function introRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'intro' ---
    introComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('button.numClicks', button.numClicks);
    psychoJS.experiment.addData('button.timesOn', button.timesOn);
    psychoJS.experiment.addData('button.timesOff', button.timesOff);
    // the Routine "intro" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_allKeys;
var practiceComponents;
function practiceRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'practice' ---
    t = 0;
    practiceClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    image_2.setImage('practice.png');
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    // keep track of which components have finished
    practiceComponents = [];
    practiceComponents.push(image_2);
    practiceComponents.push(textd_2);
    practiceComponents.push(text_2);
    practiceComponents.push(key_resp);
    
    practiceComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function practiceRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'practice' ---
    // get current time
    t = practiceClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image_2* updates
    if (t >= 0.0 && image_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_2.tStart = t;  // (not accounting for frame time here)
      image_2.frameNStart = frameN;  // exact frame index
      
      image_2.setAutoDraw(true);
    }

    
    // *textd_2* updates
    if (t >= 0.0 && textd_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textd_2.tStart = t;  // (not accounting for frame time here)
      textd_2.frameNStart = frameN;  // exact frame index
      
      textd_2.setAutoDraw(true);
    }

    
    // *text_2* updates
    if (t >= 0.0 && text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_2.tStart = t;  // (not accounting for frame time here)
      text_2.frameNStart = frameN;  // exact frame index
      
      text_2.setAutoDraw(true);
    }

    
    // *key_resp* updates
    if (t >= 0.0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }

    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    practiceComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function practiceRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'practice' ---
    practiceComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp.corr, level);
    }
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        routineTimer.reset();
        }
    
    key_resp.stop();
    // the Routine "practice" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trials;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'condresp.xlsx',
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials.forEach(function() {
      snapshot = trials.getSnapshot();
    
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(trialRoutineBegin(snapshot));
      trialsLoopScheduler.add(trialRoutineEachFrame());
      trialsLoopScheduler.add(trialRoutineEnd(snapshot));
      trialsLoopScheduler.add(trialsLoopEndIteration(trialsLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var gotValidClick;
var trialComponents;
function trialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial' ---
    t = 0;
    trialClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    image.setImage(picture);
    // setup some python lists for storing info about the mouse_click
    // current position of the mouse:
    mouse_click.x = [];
    mouse_click.y = [];
    mouse_click.leftButton = [];
    mouse_click.midButton = [];
    mouse_click.rightButton = [];
    mouse_click.time = [];
    mouse_click.clicked_name = [];
    gotValidClick = false; // until a click is received
    texta.setText(responseA);
    // reset texta to account for continued clicks & clear times on/off
    texta.reset()
    textb.setText(responseB);
    // reset textb to account for continued clicks & clear times on/off
    textb.reset()
    textc.setText(responseC);
    // reset textc to account for continued clicks & clear times on/off
    textc.reset()
    textd.setText(responseD);
    // reset textd to account for continued clicks & clear times on/off
    textd.reset()
    // keep track of which components have finished
    trialComponents = [];
    trialComponents.push(image);
    trialComponents.push(mouse_click);
    trialComponents.push(texta);
    trialComponents.push(textb);
    trialComponents.push(textc);
    trialComponents.push(textd);
    
    trialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var prevButtonState;
var _mouseButtons;
var _mouseXYs;
function trialRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial' ---
    // get current time
    t = trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image* updates
    if (t >= 0.0 && image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image.tStart = t;  // (not accounting for frame time here)
      image.frameNStart = frameN;  // exact frame index
      
      image.setAutoDraw(true);
    }

    // *mouse_click* updates
    if (t >= 0.0 && mouse_click.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_click.tStart = t;  // (not accounting for frame time here)
      mouse_click.frameNStart = frameN;  // exact frame index
      
      mouse_click.status = PsychoJS.Status.STARTED;
      mouse_click.mouseClock.reset();
      prevButtonState = mouse_click.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_click.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_click.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [texta,textb,textc,textd]) {
            if (obj.contains(mouse_click)) {
              gotValidClick = true;
              mouse_click.clicked_name.push(obj.name)
            }
          }
          _mouseXYs = mouse_click.getPos();
          mouse_click.x.push(_mouseXYs[0]);
          mouse_click.y.push(_mouseXYs[1]);
          mouse_click.leftButton.push(_mouseButtons[0]);
          mouse_click.midButton.push(_mouseButtons[1]);
          mouse_click.rightButton.push(_mouseButtons[2]);
          mouse_click.time.push(mouse_click.mouseClock.getTime());
          if (gotValidClick === true) { // end routine on response
            continueRoutine = false;
          }
        }
      }
    }
    
    // *texta* updates
    if (t >= 0 && texta.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      texta.tStart = t;  // (not accounting for frame time here)
      texta.frameNStart = frameN;  // exact frame index
      
      texta.setAutoDraw(true);
    }

    if (texta.status === PsychoJS.Status.STARTED) {
      // check whether texta has been pressed
      if (texta.isClicked) {
        if (!texta.wasClicked) {
          // store time of first click
          texta.timesOn.push(texta.clock.getTime());
          texta.numClicks += 1;
          // store time clicked until
          texta.timesOff.push(texta.clock.getTime());
        } else {
          // update time clicked until;
          texta.timesOff[texta.timesOff.length - 1] = texta.clock.getTime();
        }
        if (!texta.wasClicked) {
          // end routine when texta is clicked
          continueRoutine = false;
        }
        // if texta is still clicked next frame, it is not a new click
        texta.wasClicked = true;
      } else {
        // if texta is clicked next frame, it is a new click
        texta.wasClicked = false;
      }
    } else {
      // keep clock at 0 if texta hasn't started / has finished
      texta.clock.reset();
      // if texta is clicked next frame, it is a new click
      texta.wasClicked = false;
    }
    
    // *textb* updates
    if (t >= 0 && textb.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textb.tStart = t;  // (not accounting for frame time here)
      textb.frameNStart = frameN;  // exact frame index
      
      textb.setAutoDraw(true);
    }

    if (textb.status === PsychoJS.Status.STARTED) {
      // check whether textb has been pressed
      if (textb.isClicked) {
        if (!textb.wasClicked) {
          // store time of first click
          textb.timesOn.push(textb.clock.getTime());
          textb.numClicks += 1;
          // store time clicked until
          textb.timesOff.push(textb.clock.getTime());
        } else {
          // update time clicked until;
          textb.timesOff[textb.timesOff.length - 1] = textb.clock.getTime();
        }
        if (!textb.wasClicked) {
          // end routine when textb is clicked
          continueRoutine = false;
        }
        // if textb is still clicked next frame, it is not a new click
        textb.wasClicked = true;
      } else {
        // if textb is clicked next frame, it is a new click
        textb.wasClicked = false;
      }
    } else {
      // keep clock at 0 if textb hasn't started / has finished
      textb.clock.reset();
      // if textb is clicked next frame, it is a new click
      textb.wasClicked = false;
    }
    
    // *textc* updates
    if (t >= 0 && textc.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textc.tStart = t;  // (not accounting for frame time here)
      textc.frameNStart = frameN;  // exact frame index
      
      textc.setAutoDraw(true);
    }

    if (textc.status === PsychoJS.Status.STARTED) {
      // check whether textc has been pressed
      if (textc.isClicked) {
        if (!textc.wasClicked) {
          // store time of first click
          textc.timesOn.push(textc.clock.getTime());
          textc.numClicks += 1;
          // store time clicked until
          textc.timesOff.push(textc.clock.getTime());
        } else {
          // update time clicked until;
          textc.timesOff[textc.timesOff.length - 1] = textc.clock.getTime();
        }
        if (!textc.wasClicked) {
          // end routine when textc is clicked
          continueRoutine = false;
        }
        // if textc is still clicked next frame, it is not a new click
        textc.wasClicked = true;
      } else {
        // if textc is clicked next frame, it is a new click
        textc.wasClicked = false;
      }
    } else {
      // keep clock at 0 if textc hasn't started / has finished
      textc.clock.reset();
      // if textc is clicked next frame, it is a new click
      textc.wasClicked = false;
    }
    
    // *textd* updates
    if (t >= 0 && textd.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textd.tStart = t;  // (not accounting for frame time here)
      textd.frameNStart = frameN;  // exact frame index
      
      textd.setAutoDraw(true);
    }

    if (textd.status === PsychoJS.Status.STARTED) {
      // check whether textd has been pressed
      if (textd.isClicked) {
        if (!textd.wasClicked) {
          // store time of first click
          textd.timesOn.push(textd.clock.getTime());
          textd.numClicks += 1;
          // store time clicked until
          textd.timesOff.push(textd.clock.getTime());
        } else {
          // update time clicked until;
          textd.timesOff[textd.timesOff.length - 1] = textd.clock.getTime();
        }
        if (!textd.wasClicked) {
          // end routine when textd is clicked
          continueRoutine = false;
        }
        // if textd is still clicked next frame, it is not a new click
        textd.wasClicked = true;
      } else {
        // if textd is clicked next frame, it is a new click
        textd.wasClicked = false;
      }
    } else {
      // keep clock at 0 if textd hasn't started / has finished
      textd.clock.reset();
      // if textd is clicked next frame, it is a new click
      textd.wasClicked = false;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    trialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trialRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial' ---
    trialComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // store data for psychoJS.experiment (ExperimentHandler)
    if (mouse_click.x) {  psychoJS.experiment.addData('mouse_click.x', mouse_click.x[0])};
    if (mouse_click.y) {  psychoJS.experiment.addData('mouse_click.y', mouse_click.y[0])};
    if (mouse_click.leftButton) {  psychoJS.experiment.addData('mouse_click.leftButton', mouse_click.leftButton[0])};
    if (mouse_click.midButton) {  psychoJS.experiment.addData('mouse_click.midButton', mouse_click.midButton[0])};
    if (mouse_click.rightButton) {  psychoJS.experiment.addData('mouse_click.rightButton', mouse_click.rightButton[0])};
    if (mouse_click.time) {  psychoJS.experiment.addData('mouse_click.time', mouse_click.time[0])};
    if (mouse_click.clicked_name) {  psychoJS.experiment.addData('mouse_click.clicked_name', mouse_click.clicked_name[0])};
    
    psychoJS.experiment.addData('texta.numClicks', texta.numClicks);
    psychoJS.experiment.addData('texta.timesOn', texta.timesOn);
    psychoJS.experiment.addData('texta.timesOff', texta.timesOff);
    psychoJS.experiment.addData('textb.numClicks', textb.numClicks);
    psychoJS.experiment.addData('textb.timesOn', textb.timesOn);
    psychoJS.experiment.addData('textb.timesOff', textb.timesOff);
    psychoJS.experiment.addData('textc.numClicks', textc.numClicks);
    psychoJS.experiment.addData('textc.timesOn', textc.timesOn);
    psychoJS.experiment.addData('textc.timesOff', textc.timesOff);
    psychoJS.experiment.addData('textd.numClicks', textd.numClicks);
    psychoJS.experiment.addData('textd.timesOn', textd.timesOn);
    psychoJS.experiment.addData('textd.timesOff', textd.timesOff);
    // the Routine "trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
