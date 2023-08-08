#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This experiment was created using PsychoPy3 Experiment Builder (v2022.2.5),
    on July 07, 2023, at 11:10
If you publish work using this script the most relevant publication is:

    Peirce J, Gray JR, Simpson S, MacAskill M, Höchenberger R, Sogo H, Kastman E, Lindeløv JK. (2019) 
        PsychoPy2: Experiments in behavior made easy Behav Res 51: 195. 
        https://doi.org/10.3758/s13428-018-01193-y

"""

import psychopy
psychopy.useVersion('2022.2.5')


# --- Import packages ---
from psychopy import locale_setup
from psychopy import prefs
from psychopy import sound, gui, visual, core, data, event, logging, clock, colors, layout
from psychopy.constants import (NOT_STARTED, STARTED, PLAYING, PAUSED,
                                STOPPED, FINISHED, PRESSED, RELEASED, FOREVER)

import numpy as np  # whole numpy lib is available, prepend 'np.'
from numpy import (sin, cos, tan, log, log10, pi, average,
                   sqrt, std, deg2rad, rad2deg, linspace, asarray)
from numpy.random import random, randint, normal, shuffle, choice as randchoice
import os  # handy system and path functions
import sys  # to get file system encoding

from psychopy.hardware import keyboard



# Ensure that relative paths start from the same directory as this script
_thisDir = os.path.dirname(os.path.abspath(__file__))
os.chdir(_thisDir)
# Store info about the experiment session
psychopyVersion = '2022.2.5'
expName = 'REMT'  # from the Builder filename that created this script
expInfo = {
    'participant': f"{randint(0, 999999):06.0f}",
    'session': '001',
}
# --- Show participant info dialog --
dlg = gui.DlgFromDict(dictionary=expInfo, sortKeys=False, title=expName)
if dlg.OK == False:
    core.quit()  # user pressed cancel
expInfo['date'] = data.getDateStr()  # add a simple timestamp
expInfo['expName'] = expName
expInfo['psychopyVersion'] = psychopyVersion

# Data file name stem = absolute path + name; later add .psyexp, .csv, .log, etc
filename = _thisDir + os.sep + u'data/%s_%s_%s' % (expInfo['participant'], expName, expInfo['date'])

# An ExperimentHandler isn't essential but helps with data saving
thisExp = data.ExperimentHandler(name=expName, version='',
    extraInfo=expInfo, runtimeInfo=None,
    originPath='C:\\Users\\georgesba\\OneDrive - National Institutes of Health\\Attachments\\RMET-R\\REMT_lastrun.py',
    savePickle=True, saveWideText=True,
    dataFileName=filename)
# save a log file for detail verbose info
logFile = logging.LogFile(filename+'.log', level=logging.EXP)
logging.console.setLevel(logging.WARNING)  # this outputs to the screen, not a file

endExpNow = False  # flag for 'escape' or other condition => quit the exp
frameTolerance = 0.001  # how close to onset before 'same' frame

# Start Code - component code to be run after the window creation

# --- Setup the Window ---
win = visual.Window(
    size=[1366, 768], fullscr=True, screen=0, 
    winType='pyglet', allowStencil=False,
    monitor='testMonitor', color=[1.0000, 1.0000, 1.0000], colorSpace='rgb',
    blendMode='avg', useFBO=True, 
    units='height')
win.mouseVisible = False
# store frame rate of monitor if we can measure it
expInfo['frameRate'] = win.getActualFrameRate()
if expInfo['frameRate'] != None:
    frameDur = 1.0 / round(expInfo['frameRate'])
else:
    frameDur = 1.0 / 60.0  # could not measure, so guess
# --- Setup input devices ---
ioConfig = {}
ioSession = ioServer = eyetracker = None

# create a default keyboard (e.g. to check for escape)
defaultKeyboard = keyboard.Keyboard(backend='event')

# --- Initialize components for Routine "intro" ---
button = visual.ButtonStim(win, 
    text='Click anywhere to begin.', font='Open Sans',
    pos=(0, 0),
    letterHeight=0.05,
    size=(.5,.3), borderWidth=0.0,
    fillColor=[1.0000, 1.0000, 1.0000], borderColor=None,
    color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb',
    opacity=None,
    bold=True, italic=False,
    padding=None,
    anchor='center',
    name='button'
)
button.buttonClock = core.Clock()

# --- Initialize components for Routine "practice" ---
image_2 = visual.ImageStim(
    win=win,
    name='image_2', 
    image='sin', mask=None, anchor='center',
    ori=0.0, pos=(0, 0), size=(0.7, 0.55),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=0.0)
textd_2 = visual.TextStim(win=win, name='textd_2',
    text='For each set of eyes, click the word that best describes what the person in the picture is thinking or feeling. You may feel that more than one word is applicable but please choose just one word, the word which you consider to be most suitable. Consider the example below.',
    font='Open Sans',
    pos=(0, .35), height=0.025, wrapWidth=None, ori=0.0, 
    color='grey', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
text_2 = visual.TextStim(win=win, name='text_2',
    text='Before making your choice, make sure that you have read all 4 words. You should try to do the task as quickly as possible but you will not be timed. If you do not know what a word means you can look it up in the definition handout. When you are ready, press the space bar to begin.\n',
    font='Open Sans',
    pos=(0, -.35), height=0.025, wrapWidth=None, ori=0.0, 
    color='grey', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-2.0);
key_resp = keyboard.Keyboard()

# --- Initialize components for Routine "trial" ---
image = visual.ImageStim(
    win=win,
    name='image', 
    image='sin', mask=None, anchor='center',
    ori=0.0, pos=(0, 0), size=(0.7, 0.4),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=False, depth=0.0)
mouse_click = event.Mouse(win=win)
x, y = [None, None]
mouse_click.mouseClock = core.Clock()
texta = visual.ButtonStim(win, 
    text='', font='Open Sans',
    pos=(-.3,.3),
    letterHeight=0.03,
    size=(.25,.055), borderWidth=0.0,
    fillColor='white', borderColor=None,
    color='black', colorSpace='rgb',
    opacity=None,
    bold=False, italic=False,
    padding=None,
    anchor='center',
    name='texta'
)
texta.buttonClock = core.Clock()
textb = visual.ButtonStim(win, 
    text='', font='Open Sans',
    pos=(.3, .3),
    letterHeight=0.03,
    size=(.25,.055), borderWidth=0.0,
    fillColor='white', borderColor=None,
    color='black', colorSpace='rgb',
    opacity=None,
    bold=False, italic=False,
    padding=None,
    anchor='center',
    name='textb'
)
textb.buttonClock = core.Clock()
textc = visual.ButtonStim(win, 
    text='', font='Open Sans',
    pos=(-.3, -.3),
    letterHeight=0.03,
    size=(.25,.055), borderWidth=0.0,
    fillColor='white', borderColor=None,
    color='black', colorSpace='rgb',
    opacity=None,
    bold=False, italic=False,
    padding=None,
    anchor='center',
    name='textc'
)
textc.buttonClock = core.Clock()
textd = visual.ButtonStim(win, 
    text='', font='Open Sans',
    pos=(.3, -.3),
    letterHeight=0.03,
    size=(.25,.055), borderWidth=0.0,
    fillColor='white', borderColor=None,
    color='black', colorSpace='rgb',
    opacity=None,
    bold=False, italic=False,
    padding=None,
    anchor='center',
    name='textd'
)
textd.buttonClock = core.Clock()

# Create some handy timers
globalClock = core.Clock()  # to track the time since experiment started
routineTimer = core.Clock()  # to track time remaining of each (possibly non-slip) routine 

# --- Prepare to start Routine "intro" ---
continueRoutine = True
routineForceEnded = False
# update component parameters for each repeat
# keep track of which components have finished
introComponents = [button]
for thisComponent in introComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "intro" ---
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *button* updates
    if button.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
        # keep track of start time/frame for later
        button.frameNStart = frameN  # exact frame index
        button.tStart = t  # local t and not account for scr refresh
        button.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(button, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'button.started')
        button.setAutoDraw(True)
    if button.status == STARTED:
        # check whether button has been pressed
        if button.isClicked:
            if not button.wasClicked:
                button.timesOn.append(button.buttonClock.getTime()) # store time of first click
                button.timesOff.append(button.buttonClock.getTime()) # store time clicked until
            else:
                button.timesOff[-1] = button.buttonClock.getTime() # update time clicked until
            if not button.wasClicked:
                continueRoutine = False  # end routine when button is clicked
                None
            button.wasClicked = True  # if button is still clicked next frame, it is not a new click
        else:
            button.wasClicked = False  # if button is clicked next frame, it is a new click
    else:
        button.wasClicked = False  # if button is clicked next frame, it is a new click
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in introComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "intro" ---
for thisComponent in introComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('button.numClicks', button.numClicks)
if button.numClicks:
   thisExp.addData('button.timesOn', button.timesOn)
   thisExp.addData('button.timesOff', button.timesOff)
else:
   thisExp.addData('button.timesOn', "")
   thisExp.addData('button.timesOff', "")
# the Routine "intro" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# --- Prepare to start Routine "practice" ---
continueRoutine = True
routineForceEnded = False
# update component parameters for each repeat
image_2.setImage('practice.png')
key_resp.keys = []
key_resp.rt = []
_key_resp_allKeys = []
# keep track of which components have finished
practiceComponents = [image_2, textd_2, text_2, key_resp]
for thisComponent in practiceComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "practice" ---
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *image_2* updates
    if image_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        image_2.frameNStart = frameN  # exact frame index
        image_2.tStart = t  # local t and not account for scr refresh
        image_2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(image_2, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'image_2.started')
        image_2.setAutoDraw(True)
    
    # *textd_2* updates
    if textd_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        textd_2.frameNStart = frameN  # exact frame index
        textd_2.tStart = t  # local t and not account for scr refresh
        textd_2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(textd_2, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'textd_2.started')
        textd_2.setAutoDraw(True)
    
    # *text_2* updates
    if text_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_2.frameNStart = frameN  # exact frame index
        text_2.tStart = t  # local t and not account for scr refresh
        text_2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_2, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'text_2.started')
        text_2.setAutoDraw(True)
    
    # *key_resp* updates
    waitOnFlip = False
    if key_resp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        key_resp.frameNStart = frameN  # exact frame index
        key_resp.tStart = t  # local t and not account for scr refresh
        key_resp.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'key_resp.started')
        key_resp.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp.status == STARTED and not waitOnFlip:
        theseKeys = key_resp.getKeys(keyList=['space'], waitRelease=False)
        _key_resp_allKeys.extend(theseKeys)
        if len(_key_resp_allKeys):
            key_resp.keys = _key_resp_allKeys[-1].name  # just the last key pressed
            key_resp.rt = _key_resp_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in practiceComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "practice" ---
for thisComponent in practiceComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# check responses
if key_resp.keys in ['', [], None]:  # No response was made
    key_resp.keys = None
thisExp.addData('key_resp.keys',key_resp.keys)
if key_resp.keys != None:  # we had a response
    thisExp.addData('key_resp.rt', key_resp.rt)
thisExp.nextEntry()
# the Routine "practice" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
trials = data.TrialHandler(nReps=1.0, method='sequential', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('condresp.xlsx'),
    seed=None, name='trials')
thisExp.addLoop(trials)  # add the loop to the experiment
thisTrial = trials.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisTrial.rgb)
if thisTrial != None:
    for paramName in thisTrial:
        exec('{} = thisTrial[paramName]'.format(paramName))

for thisTrial in trials:
    currentLoop = trials
    # abbreviate parameter names if possible (e.g. rgb = thisTrial.rgb)
    if thisTrial != None:
        for paramName in thisTrial:
            exec('{} = thisTrial[paramName]'.format(paramName))
    
    # --- Prepare to start Routine "trial" ---
    continueRoutine = True
    routineForceEnded = False
    # update component parameters for each repeat
    image.setImage(picture)
    # setup some python lists for storing info about the mouse_click
    mouse_click.x = []
    mouse_click.y = []
    mouse_click.leftButton = []
    mouse_click.midButton = []
    mouse_click.rightButton = []
    mouse_click.time = []
    mouse_click.clicked_name = []
    gotValidClick = False  # until a click is received
    texta.setText(responseA)
    textb.setText(responseB)
    textc.setText(responseC)
    textd.setText(responseD)
    # keep track of which components have finished
    trialComponents = [image, mouse_click, texta, textb, textc, textd]
    for thisComponent in trialComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "trial" ---
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *image* updates
        if image.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            image.frameNStart = frameN  # exact frame index
            image.tStart = t  # local t and not account for scr refresh
            image.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(image, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'image.started')
            image.setAutoDraw(True)
        # *mouse_click* updates
        if mouse_click.status == NOT_STARTED and t >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            mouse_click.frameNStart = frameN  # exact frame index
            mouse_click.tStart = t  # local t and not account for scr refresh
            mouse_click.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(mouse_click, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.addData('mouse_click.started', t)
            mouse_click.status = STARTED
            mouse_click.mouseClock.reset()
            prevButtonState = mouse_click.getPressed()  # if button is down already this ISN'T a new click
        if mouse_click.status == STARTED:  # only update if started and not finished!
            buttons = mouse_click.getPressed()
            if buttons != prevButtonState:  # button state changed?
                prevButtonState = buttons
                if sum(buttons) > 0:  # state changed to a new click
                    # check if the mouse was inside our 'clickable' objects
                    gotValidClick = False
                    try:
                        iter([texta,textb,textc,textd])
                        clickableList = [texta,textb,textc,textd]
                    except:
                        clickableList = [[texta,textb,textc,textd]]
                    for obj in clickableList:
                        if obj.contains(mouse_click):
                            gotValidClick = True
                            mouse_click.clicked_name.append(obj.name)
                    x, y = mouse_click.getPos()
                    mouse_click.x.append(x)
                    mouse_click.y.append(y)
                    buttons = mouse_click.getPressed()
                    mouse_click.leftButton.append(buttons[0])
                    mouse_click.midButton.append(buttons[1])
                    mouse_click.rightButton.append(buttons[2])
                    mouse_click.time.append(mouse_click.mouseClock.getTime())
                    if gotValidClick:
                        continueRoutine = False  # abort routine on response
        
        # *texta* updates
        if texta.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
            # keep track of start time/frame for later
            texta.frameNStart = frameN  # exact frame index
            texta.tStart = t  # local t and not account for scr refresh
            texta.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(texta, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'texta.started')
            texta.setAutoDraw(True)
        if texta.status == STARTED:
            # check whether texta has been pressed
            if texta.isClicked:
                if not texta.wasClicked:
                    texta.timesOn.append(routineTimer.getTime()) # store time of first click
                    texta.timesOff.append(routineTimer.getTime()) # store time clicked until
                else:
                    texta.timesOff[-1] = routineTimer.getTime() # update time clicked until
                if not texta.wasClicked:
                    continueRoutine = False  # end routine when texta is clicked
                    None
                texta.wasClicked = True  # if texta is still clicked next frame, it is not a new click
            else:
                texta.wasClicked = False  # if texta is clicked next frame, it is a new click
        else:
            texta.wasClicked = False  # if texta is clicked next frame, it is a new click
        
        # *textb* updates
        if textb.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
            # keep track of start time/frame for later
            textb.frameNStart = frameN  # exact frame index
            textb.tStart = t  # local t and not account for scr refresh
            textb.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(textb, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'textb.started')
            textb.setAutoDraw(True)
        if textb.status == STARTED:
            # check whether textb has been pressed
            if textb.isClicked:
                if not textb.wasClicked:
                    textb.timesOn.append(routineTimer.getTime()) # store time of first click
                    textb.timesOff.append(routineTimer.getTime()) # store time clicked until
                else:
                    textb.timesOff[-1] = routineTimer.getTime() # update time clicked until
                if not textb.wasClicked:
                    continueRoutine = False  # end routine when textb is clicked
                    None
                textb.wasClicked = True  # if textb is still clicked next frame, it is not a new click
            else:
                textb.wasClicked = False  # if textb is clicked next frame, it is a new click
        else:
            textb.wasClicked = False  # if textb is clicked next frame, it is a new click
        
        # *textc* updates
        if textc.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
            # keep track of start time/frame for later
            textc.frameNStart = frameN  # exact frame index
            textc.tStart = t  # local t and not account for scr refresh
            textc.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(textc, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'textc.started')
            textc.setAutoDraw(True)
        if textc.status == STARTED:
            # check whether textc has been pressed
            if textc.isClicked:
                if not textc.wasClicked:
                    textc.timesOn.append(routineTimer.getTime()) # store time of first click
                    textc.timesOff.append(routineTimer.getTime()) # store time clicked until
                else:
                    textc.timesOff[-1] = routineTimer.getTime() # update time clicked until
                if not textc.wasClicked:
                    continueRoutine = False  # end routine when textc is clicked
                    None
                textc.wasClicked = True  # if textc is still clicked next frame, it is not a new click
            else:
                textc.wasClicked = False  # if textc is clicked next frame, it is a new click
        else:
            textc.wasClicked = False  # if textc is clicked next frame, it is a new click
        
        # *textd* updates
        if textd.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
            # keep track of start time/frame for later
            textd.frameNStart = frameN  # exact frame index
            textd.tStart = t  # local t and not account for scr refresh
            textd.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(textd, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'textd.started')
            textd.setAutoDraw(True)
        if textd.status == STARTED:
            # check whether textd has been pressed
            if textd.isClicked:
                if not textd.wasClicked:
                    textd.timesOn.append(routineTimer.getTime()) # store time of first click
                    textd.timesOff.append(routineTimer.getTime()) # store time clicked until
                else:
                    textd.timesOff[-1] = routineTimer.getTime() # update time clicked until
                if not textd.wasClicked:
                    continueRoutine = False  # end routine when textd is clicked
                    None
                textd.wasClicked = True  # if textd is still clicked next frame, it is not a new click
            else:
                textd.wasClicked = False  # if textd is clicked next frame, it is a new click
        else:
            textd.wasClicked = False  # if textd is clicked next frame, it is a new click
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in trialComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "trial" ---
    for thisComponent in trialComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store data for trials (TrialHandler)
    trials.addData('mouse_click.x', mouse_click.x)
    trials.addData('mouse_click.y', mouse_click.y)
    trials.addData('mouse_click.leftButton', mouse_click.leftButton)
    trials.addData('mouse_click.midButton', mouse_click.midButton)
    trials.addData('mouse_click.rightButton', mouse_click.rightButton)
    trials.addData('mouse_click.time', mouse_click.time)
    trials.addData('mouse_click.clicked_name', mouse_click.clicked_name)
    trials.addData('texta.numClicks', texta.numClicks)
    if texta.numClicks:
       trials.addData('texta.timesOn', texta.timesOn[-1])
       trials.addData('texta.timesOff', texta.timesOff[-1])
    else:
       trials.addData('texta.timesOn', "")
       trials.addData('texta.timesOff', "")
    trials.addData('textb.numClicks', textb.numClicks)
    if textb.numClicks:
       trials.addData('textb.timesOn', textb.timesOn[-1])
       trials.addData('textb.timesOff', textb.timesOff[-1])
    else:
       trials.addData('textb.timesOn', "")
       trials.addData('textb.timesOff', "")
    trials.addData('textc.numClicks', textc.numClicks)
    if textc.numClicks:
       trials.addData('textc.timesOn', textc.timesOn[-1])
       trials.addData('textc.timesOff', textc.timesOff[-1])
    else:
       trials.addData('textc.timesOn', "")
       trials.addData('textc.timesOff', "")
    trials.addData('textd.numClicks', textd.numClicks)
    if textd.numClicks:
       trials.addData('textd.timesOn', textd.timesOn[-1])
       trials.addData('textd.timesOff', textd.timesOff[-1])
    else:
       trials.addData('textd.timesOn', "")
       trials.addData('textd.timesOff', "")
    # the Routine "trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    thisExp.nextEntry()
    
# completed 1.0 repeats of 'trials'


# --- End experiment ---
# Flip one final time so any remaining win.callOnFlip() 
# and win.timeOnFlip() tasks get executed before quitting
win.flip()

# these shouldn't be strictly necessary (should auto-save)
thisExp.saveAsWideText(filename+'.csv', delim='auto')
thisExp.saveAsPickle(filename)
logging.flush()
# make sure everything is closed down
if eyetracker:
    eyetracker.setConnectionState(False)
thisExp.abort()  # or data files will save again on exit
win.close()
core.quit()
