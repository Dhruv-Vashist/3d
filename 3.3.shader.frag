#version 330 core

out vec4 fragcolor;

in vec3 acolor;
in vec2 TexCoords;

uniform sampler2D texture1;
uniform sampler2D texture2;

uniform float up_down;

void main()
{
	fragcolor = mix(texture(texture1, TexCoords), texture(texture2,TexCoords), up_down);
}