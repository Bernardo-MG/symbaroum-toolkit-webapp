
package com.bernardomg.tabletop.symbaroum.web.chargen.service;

import static com.google.common.base.Preconditions.checkNotNull;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.bernardomg.tabletop.symbaroum.web.chargen.model.Attributes;
import com.bernardomg.tabletop.symbaroum.web.chargen.model.DefaultDerivedAttributes;
import com.bernardomg.tabletop.symbaroum.web.chargen.model.DerivedAttributes;
import com.bernardomg.tabletop.symbaroum.web.model.Ability;
import com.bernardomg.tabletop.symbaroum.web.model.Race;
import com.bernardomg.tabletop.symbaroum.web.repository.PersistentAbilityRepository;
import com.bernardomg.tabletop.symbaroum.web.repository.PersistentRaceRepository;

@Service
public final class DefaultChargenService implements ChargenService {

    private final PersistentAbilityRepository abilityRepository;

    private final PersistentRaceRepository    raceRepository;

    public DefaultChargenService(final PersistentAbilityRepository abilityRepo,
            final PersistentRaceRepository raceRepo) {
        super();

        abilityRepository = checkNotNull(abilityRepo,
                "Received a null pointer as race repository");
        raceRepository = checkNotNull(raceRepo,
                "Received a null pointer as race repository");
    }

    @Override
    public final Map<String, Integer> getAbilityOptions() {
        final List<? extends Ability> abilities;

        abilities = abilityRepository.findAll();

        // TODO: The maximum level should be loaded from somewhere
        return abilities.stream()
                .collect(Collectors.toMap(Ability::getName, (i) -> 3));
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
        final List<? extends Race> races;

        races = raceRepository.findAll();

        return races.stream().map(Race::getName).collect(Collectors.toList());
    }

}
