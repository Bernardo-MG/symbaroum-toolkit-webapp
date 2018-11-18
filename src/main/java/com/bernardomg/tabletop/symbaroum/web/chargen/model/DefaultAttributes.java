
package com.bernardomg.tabletop.symbaroum.web.chargen.model;

public final class DefaultAttributes implements Attributes {

    private Integer accurate;

    private Integer cunning;

    private Integer discreet;

    private Integer persuasive;

    private Integer quick;

    private Integer resolute;

    private Integer strong;

    private Integer vigilant;

    public DefaultAttributes() {
        super();
    }

    @Override
    public Integer getAccurate() {
        return accurate;
    }

    @Override
    public Integer getCunning() {
        return cunning;
    }

    @Override
    public Integer getDiscreet() {
        return discreet;
    }

    @Override
    public Integer getPersuasive() {
        return persuasive;
    }

    @Override
    public Integer getQuick() {
        return quick;
    }

    @Override
    public Integer getResolute() {
        return resolute;
    }

    @Override
    public Integer getStrong() {
        return strong;
    }

    @Override
    public Integer getVigilant() {
        return vigilant;
    }

    public void setAccurate(final Integer value) {
        accurate = value;
    }

    public void setCunning(final Integer value) {
        cunning = value;
    }

    public void setDiscreet(final Integer value) {
        discreet = value;
    }

    public void setPersuasive(final Integer value) {
        persuasive = value;
    }

    public void setQuick(final Integer value) {
        quick = value;
    }

    public void setResolute(final Integer value) {
        resolute = value;
    }

    public void setStrong(final Integer value) {
        strong = value;
    }

    public void setVigilant(final Integer value) {
        vigilant = value;
    }

}
