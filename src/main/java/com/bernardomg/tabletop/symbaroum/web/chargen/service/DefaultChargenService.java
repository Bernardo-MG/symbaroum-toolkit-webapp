
package com.bernardomg.tabletop.symbaroum.web.chargen.service;

import java.util.Arrays;

import org.springframework.stereotype.Service;

@Service
public final class DefaultChargenService implements ChargenService {

    public DefaultChargenService() {
        super();
    }

    @Override
    public final Iterable<String> getRaceOptions() {
        return Arrays.asList("r1", "r2", "r3");
    }

}
