
package com.bernardomg.tabletop.symbaroum.web.chargen.service;

import java.util.Map;

import com.bernardomg.tabletop.symbaroum.web.chargen.model.Attributes;
import com.bernardomg.tabletop.symbaroum.web.chargen.model.DerivedAttributes;

public interface ChargenService {

    public Map<String, Integer> getAbilityOptions();

    public DerivedAttributes getDerivedAttributes(final Attributes attributes);

    public Iterable<String> getRaceOptions();

}
