/**
 * Created by user on 2018/11/15/015.
 */
import chai = require('chai');
import * as chai2 from 'chai';
import { ITSDiff, ITSOverwrite, ITSPickMember } from 'ts-type';
export { ITSDiff, ITSOverwrite, ITSPickMember };
export declare type IChaiStatic = typeof chai | typeof chai2 | Chai.ChaiStatic;
export declare type IExpectStatic = ITSPickMember<IChaiStatic, "expect">;
export declare type IAssertion = ReturnType<IExpectStatic>;
export declare type IExpectStaticFail = ITSPickMember<IExpectStatic, "fail">;
export declare type IAssertionStatic<T = IAssertion> = {
    (target: any, message?: string): T;
    fail(...args: Parameters<IExpectStaticFail>): ReturnType<IExpectStaticFail>;
};
