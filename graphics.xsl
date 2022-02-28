<xsl:stylesheet version="1.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
            <head>
                <meta charset="utf-8"/>
                <title>Daniel shaban task 2</title>
            </head>
            <body>
                <xsl:apply-templates/>
            </body>
        </html>
    </xsl:template>
    <xsl:template match="графика">
        <svg>
            <xsl:attribute name="width">
                <xsl:value-of select="@ширина" />
            </xsl:attribute>

            <xsl:attribute name="height">
                <xsl:value-of select="@высота" />
            </xsl:attribute>
            <xsl:apply-templates/>
        </svg>
    </xsl:template>
    <xsl:template match="эллипс">
        <ellipse >
            <xsl:attribute name="style">
                <xsl:text>fill:</xsl:text>
                <xsl:value-of select="@заливка" />
                <xsl:text>;</xsl:text>

                <xsl:text>stroke:</xsl:text>
                <xsl:value-of select="@ободок" />
                <xsl:text>;</xsl:text>

                <xsl:text>stroke-width:</xsl:text>
                <xsl:value-of select="@ширина-ободка" />
                <xsl:text>;</xsl:text>
            </xsl:attribute>
            <xsl:attribute name="cx">
                <xsl:value-of select="@cx" />
            </xsl:attribute>
            <xsl:attribute name="cy">
                <xsl:value-of select="@cy" />
            </xsl:attribute>
            <xsl:attribute name="rx">
                <xsl:value-of select="@rx" />
            </xsl:attribute>
            <xsl:attribute name="ry">
                <xsl:value-of select="@ry" />
            </xsl:attribute>
            <xsl:apply-templates/>
        </ellipse>
    </xsl:template>
</xsl:stylesheet>