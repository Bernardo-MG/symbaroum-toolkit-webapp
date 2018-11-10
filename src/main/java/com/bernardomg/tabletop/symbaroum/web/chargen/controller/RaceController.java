/**
 * Copyright 2018 the original author or authors
 * <p>
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 * <p>
 * http://www.apache.org/licenses/LICENSE-2.0
 * <p>
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */

package com.bernardomg.tabletop.symbaroum.web.chargen.controller;

import static com.google.common.base.Preconditions.checkNotNull;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bernardomg.tabletop.symbaroum.web.chargen.service.ChargenService;

@RestController
@RequestMapping("/rest/chargen/races")
public class RaceController {

    private final ChargenService chargenService;

    /**
     * Constructs a controller.
     * 
     * @param cgService
     *            character generation service
     */
    @Autowired
    public RaceController(final ChargenService cgService) {
        super();

        chargenService = checkNotNull(cgService,
                "Received a null pointer as chargen service");
    }

    @GetMapping(produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public final Iterable<String> getRaceOptions() {
        return chargenService.getRaceOptions();
    }

}
