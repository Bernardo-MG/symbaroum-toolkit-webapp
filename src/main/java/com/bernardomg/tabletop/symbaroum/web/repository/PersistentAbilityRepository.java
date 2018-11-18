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

package com.bernardomg.tabletop.symbaroum.web.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bernardomg.tabletop.symbaroum.web.model.persistence.PersistentAbility;

/**
 * Spring-JPA repository for {@link PersistentAbility}.
 * <p>
 * This is a simple repository just to allow the endpoints querying the entities
 * they are asked for.
 *
 * @author Bernardo Mart&iacute;nez Garrido
 */
public interface PersistentAbilityRepository
        extends JpaRepository<PersistentAbility, Integer> {

}
