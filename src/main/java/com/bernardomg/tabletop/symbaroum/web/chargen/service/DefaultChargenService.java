
package com.bernardomg.tabletop.symbaroum.web.chargen.service;

import java.util.Arrays;

import org.springframework.stereotype.Service;

import com.bernardomg.tabletop.symbaroum.web.chargen.model.Attributes;
import com.bernardomg.tabletop.symbaroum.web.chargen.model.DefaultDerivedAttributes;
import com.bernardomg.tabletop.symbaroum.web.chargen.model.DerivedAttributes;

@Service
public final class DefaultChargenService implements ChargenService {

    public DefaultChargenService() {
        super();
    }

    @Override
    public final DerivedAttributes
            getDerivedAttributes(final Attributes attributes) {
        final DerivedAttributes derived;

        derived = new DefaultDerivedAttributes();

        // TODO: Round up
        derived.setCorruptionThreshold(attributes.getResolute() / 2);
        derived.setDefense(attributes.getQuick());
        derived.setPainThreshold(attributes.getStrong() / 2);
        // TODO: Handle min value
        derived.setThoughness(attributes.getStrong());

        return derived;
    }

    @Override
    public final Iterable<String> getRaceOptions() {
        return Arrays.asList("r1", "r2", "r3");
    }

}
