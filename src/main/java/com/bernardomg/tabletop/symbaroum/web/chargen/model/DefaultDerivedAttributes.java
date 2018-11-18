
package com.bernardomg.tabletop.symbaroum.web.chargen.model;

public final class DefaultDerivedAttributes implements DerivedAttributes {

    private Integer corruptionThreshold;

    private Integer defense;

    private Integer painThreshold;

    private Integer thoughness;

    public DefaultDerivedAttributes() {
        super();
    }

    @Override
    public Integer getCorruptionThreshold() {
        return corruptionThreshold;
    }

    @Override
    public Integer getDefense() {
        return defense;
    }

    @Override
    public Integer getPainThreshold() {
        return painThreshold;
    }

    @Override
    public Integer getThoughness() {
        return thoughness;
    }

    @Override
    public void setCorruptionThreshold(final Integer value) {
        corruptionThreshold = value;
    }

    @Override
    public void setDefense(final Integer value) {
        defense = value;
    }

    @Override
    public void setPainThreshold(final Integer value) {
        painThreshold = value;
    }

    @Override
    public void setThoughness(final Integer value) {
        thoughness = value;
    }

}
