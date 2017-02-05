/**
 * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @flow
 */
'use strict';

export type Path = string;
export type Glob = string;

export type HasteConfig = {|
  defaultPlatform?: ?string,
  platforms?: Array<string>,
  providesModuleNodeModules: Array<string>,
|};

export type ConfigGlobals = Object;

export type DefaultConfig = {|
  automock: boolean,
  bail: boolean,
  browser: boolean,
  cacheDirectory: Path,
  coveragePathIgnorePatterns: Array<string>,
  coverageReporters: Array<string>,
  expand: boolean,
  globals: ConfigGlobals,
  haste: HasteConfig,
  mocksPattern: string,
  moduleDirectories: Array<string>,
  moduleFileExtensions: Array<string>,
  moduleNameMapper: {[key: string]: string},
  modulePathIgnorePatterns: Array<string>,
  noStackTrace: boolean,
  notify: boolean,
  preset: ?string,
  resetMocks: boolean,
  resetModules: boolean,
  snapshotSerializers: Array<Path>,
  testEnvironment: string,
  testMatch: Array<Glob>,
  testPathDirs: Array<Path>,
  testPathIgnorePatterns: Array<string>,
  testRegex: string,
  testResultsProcessor: ?string,
  testURL: string,
  timers: 'real' | 'fake',
  transformIgnorePatterns: Array<Glob>,
  useStderr: boolean,
  verbose: ?boolean,
  watch: boolean,
|};

export type Config = {|
  automock: boolean,
  bail: boolean,
  browser: boolean,
  cache: boolean,
  cacheDirectory: Path,
  collectCoverage: boolean,
  collectCoverageFrom: Array<Glob>,
  collectCoverageOnlyFrom: {[key: string]: boolean},
  coverageDirectory: string,
  coveragePathIgnorePatterns: Array<string>,
  coverageReporters: Array<string>,
  coverageThreshold: {global: {[key: string]: number}},
  expand: boolean,
  forceExit: boolean,
  globals: ConfigGlobals,
  haste: HasteConfig,
  logHeapUsage: boolean,
  logTransformErrors: ?boolean,
  mocksPattern: string,
  moduleDirectories: Array<string>,
  moduleFileExtensions: Array<string>,
  moduleLoader: Path,
  moduleNameMapper: {[key: string]: string},
  moduleNameMapper: {[key: string]: string},
  modulePathIgnorePatterns: Array<string>,
  modulePaths: Array<string>,
  name: string,
  noStackTrace: boolean,
  notify: boolean,
  preset: ?string,
  resetMocks: boolean,
  resetModules: boolean,
  rootDir: Path,
  setupFiles: Array<Path>,
  setupTestFrameworkScriptFile: Path,
  silent: boolean,
  snapshotSerializers: Array<Path>,
  testEnvironment: string,
  testMatch: Array<Glob>,
  testNamePattern: string,
  testPathDirs: Array<Path>,
  testPathIgnorePatterns: Array<string>,
  testRegex: string,
  testResultsProcessor: ?string,
  testRunner: string,
  testURL: string,
  timers: 'real' | 'fake',
  transform: Array<[string, Path]>,
  transformIgnorePatterns: Array<Glob>,
  unmockedModulePathPatterns: Array<string>,
  updateSnapshot: boolean,
  useStderr: boolean,
  verbose: ?boolean,
  watch: boolean,
  watchman: boolean,
|};

export type InitialConfig = {|
  automock?: boolean,
  bail?: boolean,
  browser?: boolean,
  cache?: boolean,
  cacheDirectory?: Path,
  collectCoverage?: boolean,
  collectCoverageFrom?: Array<Glob>,
  collectCoverageOnlyFrom?: {[key: string]: boolean},
  coverageDirectory?: string,
  coveragePathIgnorePatterns?: Array<string>,
  coverageReporters?: Array<string>,
  coverageThreshold?: {global: {[key: string]: number}},
  expand?: boolean,
  forceExit?: boolean,
  globals?: ConfigGlobals,
  haste?: HasteConfig,
  logHeapUsage?: boolean,
  logTransformErrors?: ?boolean,
  mocksPattern?: string,
  moduleDirectories?: Array<string>,
  moduleFileExtensions?: Array<string>,
  moduleLoader?: Path,
  moduleNameMapper?: {[key: string]: string},
  moduleNameMapper?: {[key: string]: string},
  modulePathIgnorePatterns?: Array<string>,
  modulePaths?: Array<string>,
  name?: string,
  noStackTrace?: boolean,
  notify?: boolean,
  preprocessorIgnorePatterns?: Array<Glob>,
  preset?: ?string,
  resetMocks?: boolean,
  resetModules?: boolean,
  rootDir: Path,
  scriptPreprocessor?: string,
  setupFiles?: Array<Path>,
  setupTestFrameworkScriptFile?: Path,
  silent?: boolean,
  snapshotSerializers?: Array<Path>,
  testEnvironment?: string,
  testMatch?: Array<Glob>,
  testNamePattern?: string,
  testPathDirs?: Array<Path>,
  testPathIgnorePatterns?: Array<string>,
  testRegex?: string,
  testResultsProcessor?: ?string,
  testRunner?: string,
  testURL?: string,
  timers?: 'real' | 'fake',
  transform?: {[key: string]: string},
  transformIgnorePatterns?: Array<Glob>,
  unmockedModulePathPatterns?: Array<string>,
  updateSnapshot?: boolean,
  useStderr?: boolean,
  verbose?: ?boolean,
  watch?: boolean,
  watchman?: boolean,
|};