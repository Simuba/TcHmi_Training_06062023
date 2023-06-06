/*
 * Generated 2/4/2021 1:24:23 PM
 * Copyright (C) 2021
 */
module TcHmi {
    export module Controls {
        export module TsStateControl {
            export class TsStateControl extends TcHmi.Controls.System.TcHmiControl {

                /*
                Attribute philosophy
                --------------------
                - Local variables are not set while definition in class, so they have the value 'undefined'.
                - On compile the Framework sets the value from HTML or from theme (possibly 'null') via normal setters
                - The "changed detection" in the setter will result in processing the value only once while compile
                - Attention: If we have a Server Binding on an Attribute the setter can be very late or never (leaving the value = undefined).
                */

                /** [1] void*.ers - JQuery elements */
                private __elementText: JQuery;
                private __elementAuto: JQuery;
                private __elementMan: JQuery;
                private __elementStop: JQuery;

                /** [2] void*.ers - Attributes */
                private __requestState: number;
                private __responseState: number;
                private __greenText: string;
                private __blueText: string;
                private __orangeText: string;

                /**
                 * @description Constructor of the control
                 * @param {JQuery} element Element from HTML (internal, do not use)
                 * @param {JQuery} pcElement precompiled Element (internal, do not use)
                 * @param {TcHmi.Controls.ControlAttributeList} attrs Attributes defined in HTML in a special format (internal, do not use)
                 * @returns {void}
                 */
                constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList) {
                    /** Call base class constructor */
                    super(element, pcElement, attrs);
                }

                protected __elementTemplateRoot!: JQuery;

				/**
                  * If raised, the control object exists in control cache and constructor of each inheritation level was called.
                  * Call attribute processor functions here to initialize default values!
                  */
                public __previnit() {
                    // Fetch template root element
                    this.__elementTemplateRoot = this.__element.find('.TcHmi_Controls_TsStateControl_TsStateControl-Template');
                    if (this.__elementTemplateRoot.length === 0) {
                        throw new Error('Invalid Template.html');
                    }
                    else {
                        /** [3] void*.ers - Find all elements by class */
                        this.__elementText = this.__elementTemplateRoot.find('.state-control-text');
                        this.__elementAuto = this.__elementTemplateRoot.find('.state-control-automatic');
                        this.__elementMan = this.__elementTemplateRoot.find('.state-control-manual');
                        this.__elementStop = this.__elementTemplateRoot.find('.state-control-stop');
                    }

                    // Call __previnit of base class
                    super.__previnit();
                }
                /** 
                 * @description Is called during control initialize phase after attribute setter have been called based on it's default or initial html dom values. 
                 * @returns {void}
                 */
                public __init() {
                    super.__init();
                }

                /**
                * @description Is called by tachcontrol() after the control instance gets part of the current DOM.
                * Is only allowed to be called from the framework itself!
                */
                public __attach() {
                    super.__attach();

                    /** [4] void*.ers - Register click events */
                    this.__elementAuto.on('click', this.__onClickAuto());
                    this.__elementMan.on('click', this.__onClickMan());
                    this.__elementStop.on('click', this.__onClickStop());
                    TcHmi.EventProvider.register('onLocaleChanged', this.__onLocaleChanged());
                }

                /**
                * @description Is called by tachcontrol() after the control instance is no longer part of the current DOM.
                * Is only allowed to be called from the framework itself!
                */
                public __detach() {
                    super.__detach();

                    /**
                     * Disable everything which is not needed while the control is not part of the active dom.
                     * No need to listen to events for example!
                     */
                }

                /**
                * @description Destroy the current control instance. 
                * Will be called automatically if system destroys control!
                */
                public destroy() {
                    /**
                    * While __keepAlive is set to true control must not be destroyed.
                    */
                    if (this.__keepAlive) {
                        return;
                    }

                    super.destroy();

                    /**
                    * Free resources like child controls etc.
                    */
                }

                /** [5] void*.ers - Implement click events */

                private __onClickAuto(): false | JQuery.EventHandlerBase<HTMLElement, JQuery.ClickEvent<HTMLElement, undefined, HTMLElement, HTMLElement>> {
                    var _control = this;

                    return function (e) {
                        _control.__requestState = 2;

                        if (!_control.__elementAuto[0].classList.contains("responded")) {
                            _control.__elementAuto[0].classList.add("requested");
                        }

                        _control.__elementMan[0].classList.remove("requested");
                        _control.__elementStop[0].classList.remove("requested");

                        TcHmi.EventProvider.raise(_control.getId() + '.onRequestChanged', _control.__requestState);
                        TcHmi.EventProvider.raise(_control.getId() + '.onPropertyChanged', { propertyName: "RequestState" }, _control.__requestState);
                    }
                }

                private __onClickMan(): false | JQuery.EventHandlerBase<HTMLElement, JQuery.ClickEvent<HTMLElement, undefined, HTMLElement, HTMLElement>> {
                    var _control = this;

                    return function (e) {
                        _control.__requestState = 1;

                        if (!_control.__elementMan[0].classList.contains("responded")) {
                            _control.__elementMan[0].classList.add("requested");
                        }

                        _control.__elementAuto[0].classList.remove("requested");
                        _control.__elementStop[0].classList.remove("requested");

                        TcHmi.EventProvider.raise(_control.getId() + '.onRequestChanged', _control.__requestState);
                        TcHmi.EventProvider.raise(_control.getId() + '.onPropertyChanged', { propertyName: "RequestState" }, _control.__requestState);
                    }
                }

                private __onClickStop(): false | JQuery.EventHandlerBase<HTMLElement, JQuery.ClickEvent<HTMLElement, undefined, HTMLElement, HTMLElement>> {
                    var _control = this;

                    return function (e) {
                        _control.__requestState = 0;

                        if (!_control.__elementStop[0].classList.contains("responded")) {
                            _control.__elementStop[0].classList.add("requested");
                        }

                        _control.__elementAuto[0].classList.remove("requested");
                        _control.__elementMan[0].classList.remove("requested");

                        TcHmi.EventProvider.raise(_control.getId() + '.onRequestChanged', _control.__requestState);
                        TcHmi.EventProvider.raise(_control.getId() + '.onPropertyChanged', { propertyName: "RequestState" }, _control.__requestState);
                    }
                }

                /** [6] void*.ers - Implement localization change */

                __onLocaleChanged(): (e: EventProvider.Event, ...data: any[]) => void {
                    var _control = this;

                    return function (e) {
                        switch (_control.__responseState) {
                            case 0:
                                _control.__elementText[0].innerHTML = _control.__getTextOfLocale(_control.__orangeText);
                                break;
                            case 1:
                                _control.__elementText[0].innerHTML = _control.__getTextOfLocale(_control.__blueText);
                                break;
                            case 2:
                                _control.__elementText[0].innerHTML = _control.__getTextOfLocale(_control.__greenText);
                                break;
                        }
                    }
                }

                /** [7] void*.ers - On attribute changed */

                public setRequestState = (data: number) => {
                    ; /** Requested state set from outside has no effect */
                }

                public getRequestState =  () => {
                    return this.__requestState;
                }

                public setResponseState =  (data: number) => {
                    if (data === null) { var convertedData = this.getAttributeDefaultValueInternal('ResponseState') }
                    else { var convertedData:any = TcHmi.ValueConverter.toNumber(data); }
                    if (convertedData === null) { convertedData = this.getAttributeDefaultValueInternal('ResponseState') };
                    if (tchmi_equal(convertedData, this.__responseState)) { return; };
                    this.__responseState = convertedData;
                    TcHmi.EventProvider.raise(this.__id + ".onFunctionResultChanged", ["getResponseState"]);
                    this.__updateStyle(this);
                }

                public getResponseState =  () => {
                    return this.__responseState;
                }

                public setOrangeState = (data: string) => {
                    var convertedData = TcHmi.ValueConverter.toString(data);
                    if (convertedData === null) { convertedData = this.getAttributeDefaultValueInternal('OrangeState') };
                    if (tchmi_equal(convertedData, this.__orangeText)) { return; };

                    if (!convertedData) {
                        this.__orangeText = '';
                    }
                    else {
                        this.__orangeText = String(convertedData);
                    }

                    TcHmi.EventProvider.raise(this.__id + ".onFunctionResultChanged", ["getOrangeState"]);
                    if (this.__responseState === 0) { (this.__elementText as unknown as HTMLInputElement).innerHTML = this.__getTextOfLocale(this.__orangeText) };
                }

                public getOrangeState =  () => {
                    return this.__orangeText;
                }

                public setBlueState = (data: string) => {
                    var convertedData = TcHmi.ValueConverter.toString(data);
                    if (convertedData === null) { convertedData = this.getAttributeDefaultValueInternal('BlueState') };
                    if (tchmi_equal(convertedData, this.__blueText)) { return; };

                    if (!convertedData) {
                        this.__blueText = '';
                    }
                    else {
                        this.__blueText = String(convertedData);
                    }

                    TcHmi.EventProvider.raise(this.__id + ".onFunctionResultChanged", ["getBlueState"]);
                    if (this.__responseState === 1) { (this.__elementText as unknown as HTMLInputElement).innerHTML = this.__getTextOfLocale(this.__blueText) };
                }

                public getBlueState =  () => {
                    return this.__blueText;
                }

                public setGreenState =  (data: string) => {
                    var convertedData = TcHmi.ValueConverter.toString(data);
                    if (convertedData === null) { convertedData = this.getAttributeDefaultValueInternal('GreenState') };
                    if (tchmi_equal(convertedData, this.__greenText)) { return; };

                    if (!convertedData) {
                        this.__greenText = '';
                    }
                    else {
                        this.__greenText = String(convertedData);
                    }

                    TcHmi.EventProvider.raise(this.__id + ".onFunctionResultChanged", ["getGreenState"]);
                    if (this.__responseState === 2) { (this.__elementText as unknown as HTMLInputElement).innerHTML = this.__getTextOfLocale(this.__greenText) };
                }

                public getGreenState =  () => {
                    return this.__orangeText;
                }

                /** [8] void*.ers - Helper functions */
                private __updateStyle = function (control: any) {

                    switch (control.__responseState) {
                        case 0:
                            control.__elementStop[0].classList.add("responded");
                            control.__elementStop[0].classList.remove("requested");
                            control.__elementMan[0].classList.remove("responded");
                            control.__elementAuto[0].classList.remove("responded");
                            control.__elementText[0].innerHTML = control.__getTextOfLocale(control.__orangeText);
                            break;

                        case 1:
                            control.__elementMan[0].classList.add("responded");
                            control.__elementMan[0].classList.remove("requested");
                            control.__elementStop[0].classList.remove("responded");
                            control.__elementAuto[0].classList.remove("responded");
                            control.__elementText[0].innerHTML = control.__getTextOfLocale(control.__blueText);
                            break;

                        case 2:
                            control.__elementAuto[0].classList.add("responded");
                            control.__elementAuto[0].classList.remove("requested");
                            control.__elementStop[0].classList.remove("responded");
                            control.__elementMan[0].classList.remove("responded");
                            control.__elementText[0].innerHTML = control.__getTextOfLocale(control.__greenText);
                            break;
                    }
                }

                private __getTextOfLocale = function (textOrLocale: any) {
                    var outputText = textOrLocale;

                    if (outputText.match("%l%")) {
                        try {
                            outputText = TcHmi.Symbol.readEx(textOrLocale);
                            if (!outputText) {
                                outputText = textOrLocale;
                            }
                        } catch (e) {
                            console.log("Invalid language key:" + textOrLocale);
                            outputText = textOrLocale;
                        }
                    }
                    return outputText;
                };

            }
        }

        registerEx('TsStateControl', 'TcHmi.Controls.TsStateControl', TsStateControl.TsStateControl);
    }
}