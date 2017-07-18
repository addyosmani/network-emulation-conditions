/**
 * @license
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Derived from the Chrome DevTools Network Conditions Selector.
 */
const networkConditions = {
    GPRS: {
        title: "GPRS",
        download: 50 * 1024 / 8, // 50kbps
        upload: 20 * 1024 / 8, // 20kbps
        latency: 500 // 500ms
    },
    REGULAR_2G: {
        title: "Regular 2G",
        download: 250 * 1024 / 8, // 250kbps
        upload: 50 * 1024 / 8, // 50kbps
        latency: 300 // 300ms
    },
    SLOW_3G: {
        title: "Slow 3G",
        download: 500 * 1024 / 8 * .8, // 400kbps
        upload: 500 * 1024 / 8 * .8, // 400kbps
        latency: 400 * 5 // 2000ms
    },
    GOOD_2G: {
        title: "Good 2G",
        download: 450 * 1024 / 8, // 450kbps
        upload: 150 * 1024 / 8, // 150kbps
        latency: 150 // 150ms
    },
    REGULAR_3G: {
        title: "Regular 3G",
        download: 750 * 1024 / 8, // 750kbps
        upload: 250 * 1024 / 8, // 250kbps
        latency: 100 // 100ms
    },
    FAST_3G: {
        title: "Fast 3G",
        download: 1.6 * 1024 * 1024 / 8 * .9, // 1.44kbps
        upload: 750 * 1024 / 8 * .9, // 675kbps
        latency: 150 * 3.75 // 562.5ms
    },
    GOOD_3G: {
        title: "Good 3G",
        download: 1.5 * 1024 * 1024 / 8, // 1.5mbps
        upload: 750 * 1024 / 8, // 750kbps
        latency: 40 // 40ms
    },
    REGULAR_4G: {
        title: "Regular 4G",
        download: 4 * 1024 * 1024 / 8, // 4mbps
        upload: 3 * 1024 * 1024 / 8, // 3mbps
        latency: 20 // 20ms
    },
    DSL: {
        title: "DSL",
        download: 2 * 1024 * 1024 / 8, // 2mbps
        upload: 1 * 1024 * 1024 / 8, // 1mbps
        latency: 5 // 5ms
    },
    WIFI: {
        title: "WiFi",
        download: 30 * 1024 * 1024 / 8, // 30mbps
        upload: 15 * 1024 * 1024 / 8, // 15mbps
        latency: 2 // 2ms
    }
};

module.exports = networkConditions;
