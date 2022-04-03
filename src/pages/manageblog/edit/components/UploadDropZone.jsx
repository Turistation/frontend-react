import { Group, Text, useMantineTheme } from '@mantine/core';
import { Dropzone, IMAGE_MIME_TYPE } from '@mantine/dropzone';
import { Photo, Upload, X } from 'tabler-icons-react';

function getIconColor(status, theme) {
    return status.accepted
        ? theme.colors[theme.primaryColor][
              theme.colorScheme === 'dark' ? 4 : 6
          ]
        : status.rejected
        ? theme.colors.red[theme.colorScheme === 'dark' ? 4 : 6]
        : theme.colorScheme === 'dark'
        ? theme.colors.dark[0]
        : theme.colors.gray[7];
}

function ImageUploadIcon({ status, ...props }) {
    if (status.accepted) {
        return <Upload {...props} />;
    }

    if (status.rejected) {
        return <X {...props} />;
    }

    return <Photo {...props} />;
}

const UploadDropZone = (props) => {
    const { onDrop, listFilename = [] } = props;
    const theme = useMantineTheme();
    return (
        <Dropzone
            onDrop={onDrop}
            onReject={() => {}}
            maxSize={3 * 1024 ** 2}
            accept={IMAGE_MIME_TYPE}
            multiple
        >
            {(status) => (
                <>
                    <Group
                        position="center"
                        spacing="xl"
                        style={{
                            minHeight: 220,
                            pointerEvents: 'none',
                        }}
                    >
                        <ImageUploadIcon
                            status={status}
                            style={{
                                color: getIconColor(status, theme),
                            }}
                            size={80}
                        />

                        <div>
                            <Text size="xl" inline>
                                Drag images here or click to select
                                files
                            </Text>
                            <Text
                                size="sm"
                                color="dimmed"
                                inline
                                mt={7}
                            >
                                Attach as many files as you like, each
                                file should not exceed 5mb
                            </Text>
                        </div>
                    </Group>
                    {listFilename?.length > 0 && (
                        <div className="text-center">
                            {listFilename?.map((filename, idx) => (
                                <p key={idx}>{filename}</p>
                            ))}
                        </div>
                    )}
                </>
            )}
        </Dropzone>
    );
};

export default UploadDropZone;
