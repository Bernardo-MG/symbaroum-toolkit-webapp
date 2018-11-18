
package com.bernardomg.tabletop.symbaroum.web.chargen.service;

import com.bernardomg.tabletop.symbaroum.web.chargen.model.Attributes;
import com.bernardomg.tabletop.symbaroum.web.chargen.model.DerivedAttributes;

public interface ChargenService {

    public Iterable<String> getAbilityOptions();

    public DerivedAttributes getDerivedAttributes(final Attributes attributes);

    public Iterable<String> getRaceOptions();

}
